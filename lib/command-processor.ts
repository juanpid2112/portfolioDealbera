import type { FileSystemType } from "./types"

interface CommandResult {
  output: string
  newPath?: string[]
}

export function processCommand(command: string, currentPath: string[], fileSystem: FileSystemType): CommandResult {
  const trimmedCommand = command.trim()

  if (!trimmedCommand) {
    return { output: "" }
  }

  const [cmd, ...args] = trimmedCommand.split(" ")

  switch (cmd.toLowerCase()) {
    case "help":
      return {
        output: `Available commands:
        ls - List available files and directories
        cd [directory] - Change to the specified directory
        cat [file] - Display the contents of a file
        help - Show this help message
        `,
      }

    case "ls":
      return { output: listDirectory(currentPath, fileSystem) }

    case "cd":
      return changeDirectory(args[0], currentPath, fileSystem)

    case "cat":
      return { output: showFileContent(args[0], currentPath, fileSystem) }

    case "clear":
      // This will be handled by the Terminal component
      return { output: "", newPath: currentPath }

    default:
      return { output: `Unrecognized command: ${cmd}. Type "help" to see available commands.` }
  }
}

function listDirectory(path: string[], fileSystem: FileSystemType): string {
  let current = fileSystem

  // Navigate to the current directory
  for (const dir of path) {
    if (current[dir] && typeof current[dir] === "object") {
      current = current[dir] as FileSystemType
    } else {
      return "Error: Directory not found"
    }
  }

  // List contents
  const contents = Object.keys(current)

  if (contents.length === 0) {
    return "The directory is empty"
  }

  // Format output: directories and files
  const directories: string[] = []
  const files: string[] = []

  contents.forEach((item) => {
    if (typeof current[item] === "object") {
      //directories.push(`\x1b[34m${item}/\x1b[0m`) // Blue color for directories
      directories.push(`${item}/`); // Solo devuelve el nombre sin formateo JSX
    } else {
      files.push(item)
    }
  })

  return [...directories, ...files].join("\n")
}

function changeDirectory(target: string, currentPath: string[], fileSystem: FileSystemType): CommandResult {
  if (!target) {
    return { output: "Specify a directory", newPath: currentPath }
  }

  // Handle "cd .."
  if (target === "..") {
    if (currentPath.length > 1) {
      const newPath = [...currentPath]
      newPath.pop()
      return { output: "", newPath }
    } else {
      return { output: "You are already in the root directory", newPath: currentPath }
    }
  }

  // Navigate to the current directory
  let current = fileSystem
  for (const dir of currentPath) {
    if (current[dir] && typeof current[dir] === "object") {
      current = current[dir] as FileSystemType
    } else {
      return { output: "Error: Current directory not found", newPath: currentPath }
    }
  }

  // Check if target directory exists
  if (current[target] && typeof current[target] === "object") {
    return { output: "", newPath: [...currentPath, target] }
  } else {
    return { output: `Error: The directory "${target}" does not exist`, newPath: currentPath }
  }
}

function showFileContent(filename: string, currentPath: string[], fileSystem: FileSystemType): string {
  if (!filename) {
    return "Specify a file"
  }

  // Navigate to the current directory
  let current = fileSystem
  for (const dir of currentPath) {
    if (current[dir] && typeof current[dir] === "object") {
      current = current[dir] as FileSystemType
    } else {
      return "Error: Current directory not found"
    }
  }

  // Check if file exists and is a string (not a directory)
  if (current[filename] && typeof current[filename] === "string") {
    return current[filename] as string
  } else if (current[filename] && typeof current[filename] === "object") {
    return `Error: "${filename}" is a directory, not a file`
  } else {
    return `Error: The file "${filename}" does not exist`
  }
}

