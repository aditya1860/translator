import { useState } from 'react'
import axios from 'axios'
import { IconTranslate, IconCopy, IconCheck } from '../components/icons.jsx'

const LANGUAGES = [
  { code: 'hi', label: 'Hindi' },
  { code: 'fr', label: 'French' },
  { code: 'es', label: 'Spanish' },
  { code: 'de', label: 'German' },
  { code: 'ja', label: 'Japanese' },
  { code: 'zh', label: 'Chinese' },
  { code: 'ar', label: 'Arabic' },
  { code: 'ru', label: 'Russian' },
]

export default function Translator() {
  const [inputText, setInputText] = useState('')
  const [targetLang, setTargetLang] = useState('hi')
  const [translatedText, setTranslatedText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const handleTranslate = async () => {
    if (!inputText.trim()) return
    setLoading(true)
    setError('')
    setTranslatedText('')

    try {
      /*
       * DEFAULT: MyMemory free API — no key required, good for dev/testing.
       * -----------------------------------------------------------------
       * TO USE RAPIDAPI INSTEAD (per the original task spec):
       * 1. Subscribe to a translation API on RapidAPI (e.g. "Google Translate").
       * 2. Add a .env file: VITE_RAPIDAPI_KEY=your_key_here
       * 3. Replace the axios.get call below with, e.g.:
       *
       *    const { data } = await axios.post(
       *      'https://google-translate1.p.rapidapi.com/language/translate/v2',
       *      new URLSearchParams({ q: inputText, target: targetLang, source: 'en' }),
       *      {
       *        headers: {
       *          'content-type': 'application/x-www-form-urlencoded',
       *          'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
       *          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
       *        },
       *      }
       *    )
       *    setTranslatedText(data.data.translations[0].translatedText)
       */
      const { data } = await axios.get('https://api.mymemory.translated.net/get', {
        params: { q: inputText, langpair: `en|${targetLang}` },
      })

      if (data?.responseData?.translatedText) {
        setTranslatedText(data.responseData.translatedText)
      } else {
        setError('Translation failed. Try rephrasing the text and run it again.')
      }
    } catch {
      setError('The translation service did not respond. Check your connection and retry.')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    if (!translatedText) return
    navigator.clipboard.writeText(translatedText)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="max-w-3xl">
      <PageHeader
        icon={IconTranslate}
        title="Translator"
        description="Convert English text into a target language using a live translation API."
      />

      <div className="rounded-xl border border-slate-200 bg-white shadow-panel">
        <div className="border-b border-slate-200 px-5 py-4">
          <label className="mb-1.5 block text-[12px] font-medium text-slate-600">
            Source text (English)
          </label>
          <textarea
            className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 p-3 text-[13px] text-slate-800 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            rows={4}
            placeholder="Type or paste the text you want translated..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 px-5 py-4">
          <div className="flex-1 min-w-[180px]">
            <label className="mb-1.5 block text-[12px] font-medium text-slate-600">
              Target language
            </label>
            <select
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-800 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleTranslate}
            disabled={loading || !inputText.trim()}
            className="mt-6 rounded-lg bg-brand-500 px-5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
          >
            {loading ? 'Translating…' : 'Run translation'}
          </button>
        </div>

        {error && (
          <div className="border-t border-red-100 bg-red-50 px-5 py-3">
            <p className="text-[13px] text-red-600">{error}</p>
          </div>
        )}

        {translatedText && (
          <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[12px] font-medium text-slate-600">Result</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[12px] font-medium text-slate-500 hover:bg-slate-200/70"
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
            <p className="rounded-lg border border-slate-200 bg-white p-3 font-mono text-[13px] text-slate-800">
              {translatedText}
            </p>
          </div>
        )}
      </div>
    </div>
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
