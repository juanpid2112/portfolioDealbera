export default function TerminalOutput({
  history,
}: {
  history: Array<{ command: string; output: string }>
}) {
  return (
    <div className="space-y-2">
      {history.map((entry, index) => (
        <div key={index}>
          {entry.command && (
            <div className="flex">
              <span className="text-blue-400">root&gt;</span>
              <span className="ml-2">{entry.command}</span>
            </div>
          )}
          <div className="whitespace-pre-line">{entry.output}</div>
        </div>
      ))}
    </div>
  )
}

