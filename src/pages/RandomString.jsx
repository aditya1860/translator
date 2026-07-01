import { useState, useCallback, useEffect } from 'react'
import { IconShuffle, IconCopy, IconCheck } from '../components/icons.jsx'

const CHAR_SETS = {
  letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}',
}

export default function RandomString() {
  const [length, setLength] = useState(16)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [randomString, setRandomString] = useState('')
  const [copied, setCopied] = useState(false)

  // useCallback — memoized so the function reference only changes when
  // its actual dependencies (length, includeNumbers, includeSymbols) change.
  const generateString = useCallback(() => {
    let chars = CHAR_SETS.letters
    if (includeNumbers) chars += CHAR_SETS.numbers
    if (includeSymbols) chars += CHAR_SETS.symbols

    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setRandomString(result)
  }, [length, includeNumbers, includeSymbols])

  // useEffect — regenerate whenever settings (and therefore generateString) change.
  useEffect(() => {
    generateString()
  }, [generateString])

  // useEffect — auto-clear the "Copied" state after 1.5s.
  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 1500)
    return () => clearTimeout(timer)
  }, [copied])

  const handleCopy = () => {
    navigator.clipboard.writeText(randomString)
    setCopied(true)
  }

  return (
    <div className="max-w-3xl">
      <PageHeader
        icon={IconShuffle}
        title="String Generator"
        description="Generate a random string with a configurable length and character set."
      />

      <div className="rounded-xl border border-slate-200 bg-white shadow-panel">
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
          <code className="flex-1 overflow-x-auto whitespace-nowrap font-mono text-[15px] text-slate-800">
            {randomString}
          </code>
          <button
            onClick={handleCopy}
            className="flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-[12px] font-medium text-slate-600 hover:bg-slate-50"
          >
            {copied ? (
              <>
                <IconCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-emerald-600">Copied</span>
              </>
            ) : (
              <>
                <IconCopy className="h-3.5 w-3.5" />
                Copy
              </>
            )}
          </button>
        </div>

        <div className="space-y-5 px-5 py-5">
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label className="text-[12px] font-medium text-slate-600">Length</label>
              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[12px] font-mono text-slate-600">
                {length}
              </span>
            </div>
            <input
              type="range"
              min={4}
              max={64}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <ToggleRow
              label="Include numbers"
              checked={includeNumbers}
              onChange={setIncludeNumbers}
            />
            <ToggleRow
              label="Include symbols"
              checked={includeSymbols}
              onChange={setIncludeSymbols}
            />
          </div>

          <button
            onClick={generateString}
            className="w-full rounded-lg bg-brand-500 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-brand-600"
          >
            Generate new string
          </button>
        </div>
      </div>
    </div>
  )
}

function ToggleRow({ label, checked, onChange }) {
  return (
    <label className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2.5">
      <span className="text-[13px] text-slate-700">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 accent-brand-500"
      />
    </label>
  )
}

function PageHeader({ icon: Icon, title, description }) {
  return (
    <div className="mb-6 flex items-start gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h1 className="text-[18px] font-semibold text-slate-900">{title}</h1>
        <p className="mt-0.5 text-[13px] text-slate-500">{description}</p>
      </div>
    </div>
  )
}
