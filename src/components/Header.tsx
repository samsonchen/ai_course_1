import { useLanguage } from '../hooks/useLanguage'
import { RESTAURANT_NAME, DINING_INFO } from '../data/site-info'

export function Header() {
  const { lang } = useLanguage()

  return (
    <header>
      <div className="relative h-[220px] bg-gradient-to-br from-[#C8941A] to-[#8B5E0A] overflow-hidden flex items-end">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #fff 0%, transparent 60%)' }}
        />
        <div className="relative z-10 w-full px-5 pb-5">
          <p className="font-inter text-white/80 text-xs font-medium tracking-widest uppercase mb-1">Thai Restaurant</p>
          <h1 className="font-noto text-white text-3xl font-bold leading-tight drop-shadow-lg">{RESTAURANT_NAME[lang]}</h1>
        </div>
      </div>
      <div className="bg-white px-4 py-3 border-b border-border-color">
        <p className="font-inter text-text-secondary text-xs text-center">{DINING_INFO[lang]}</p>
      </div>
    </header>
  )
}
