"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

interface TerminalInputProps {
  onCommand: (command: string) => void
  currentPath: string[]
  onKeyNavigation: (direction: "up" | "down") => string
}

export default function TerminalInput({ onCommand, currentPath, onKeyNavigation }: TerminalInputProps) {
  const [input, setInput] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus input on mount and when clicked outside
  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onCommand(input)
      setInput("")
    } else if (e.key === "ArrowUp") {
      const previousCommand = onKeyNavigation("up")
      setInput(previousCommand)
      e.preventDefault()
    } else if (e.key === "ArrowDown") {
      const nextCommand = onKeyNavigation("down")
      setInput(nextCommand)
      e.preventDefault()
    }
  }

  return (
    <div className="flex items-center mt-2">
      <span className="text-blue-400">{currentPath.join("/")}&gt;</span>
      <div className="relative flex-grow ml-2">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent outline-none text-green-400 caret-transparent"
          autoFocus
        />
        {/* Custom cursor */}
        <span
          className="absolute top-0 left-0 ml-[calc(1ch*var(--cursor-pos))]"
          style={
            {
              "--cursor-pos": input.length,
              opacity: cursorVisible ? 1 : 0,
            } as any
          }
        >
          ▋
        </span>
      </div>
    </div>
  )
}

