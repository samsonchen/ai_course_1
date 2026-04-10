import { useLanguage } from '../hooks/useLanguage'
import { LANG_LABELS } from '../data/site-info'
import type { Lang } from '../types/menu'

const LANGS: Lang[] = ['zh', 'en', 'ja', 'ko']

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="sticky top-0 z-20 bg-white border-b border-[#E5E5E5]">
      <div className="flex items-center gap-1.5 px-4 py-2">
        {LANGS.map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-4 py-1.5 rounded-pill text-[13px] transition-colors ${
              lang === l ? 'bg-gold text-white font-semibold' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {LANG_LABELS[l]}
          </button>
        ))}
      </div>
    </div>
  )
}
