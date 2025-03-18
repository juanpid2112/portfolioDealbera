"use client"
import Terminal from "@/components/terminal"
import { fileSystem } from "@/lib/file-system"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="w-full max-w-4xl rounded-lg border border-gray-700 bg-gray-900 shadow-xl overflow-hidden">
        <div className="flex items-center bg-gray-800 px-4 py-2">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="mx-auto text-sm text-gray-400">portfolio@terminal</div>
        </div>
        <Terminal fileSystem={fileSystem} />
      </div>
    </main>
  )
}

