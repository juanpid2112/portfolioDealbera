"use client"

import { useState, useRef } from "react"
import TerminalInput from "./terminal-input"
import TerminalOutput from "./terminal-output"
import { processCommand } from "@/lib/command-processor"
import type { FileSystemType } from "@/lib/types"

interface TerminalProps {
  fileSystem: FileSystemType
}

export default function Terminal({ fileSystem }: TerminalProps) {
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: "",
      output: 'Welcome to my interactive portfolio.\nType "help" to see available commands.\n',
    },
  ])
  const [currentPath, setCurrentPath] = useState<string[]>(["root"])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  const terminalRef = useRef<HTMLDivElement>(null)

  const handleCommand = (command: string) => {
    // Add command to history
    setCommandHistory((prev) => [...prev, command])
    setHistoryIndex(-1)

    // Process the command
    const { output, newPath } = processCommand(command, currentPath, fileSystem)

    // Update history
    setHistory((prev) => [...prev, { command, output }])

    // Update path if changed
    if (newPath) {
      setCurrentPath(newPath)
    }

    // Scroll to bottom
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight
      }
    }, 0)
  }

  const handleKeyNavigation = (direction: "up" | "down"): string => {
    if (commandHistory.length === 0) return ""

    let newIndex = historyIndex

    if (direction === "up") {
      newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
    } else {
      newIndex = historyIndex === -1 ? -1 : Math.min(commandHistory.length - 1, historyIndex + 1)
    }

    setHistoryIndex(newIndex)
    return newIndex === -1 ? "" : commandHistory[newIndex]
  }

  return (
    <div ref={terminalRef} className="h-[70vh] overflow-y-auto p-4 font-mono text-green-400 bg-black">
      <TerminalOutput history={history} />
      <TerminalInput onCommand={handleCommand} currentPath={currentPath} onKeyNavigation={handleKeyNavigation} />
    </div>
  )
}

