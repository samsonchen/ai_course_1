import { useEffect, useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { CATEGORY_LABELS, CATEGORIES } from '../data/site-info'
import type { Category } from '../types/menu'

export function CategoryNav() {
  const { lang } = useLanguage()
  const [active, setActive] = useState<Category>('main')

  const scrollTo = (cat: Category) => {
    const el = document.getElementById(cat)
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); setActive(cat) }
  }

  useEffect(() => {
    const handleScroll = () => {
      for (const cat of [...CATEGORIES].reverse()) {
        const el = document.getElementById(cat)
        if (el && el.getBoundingClientRect().top <= 110) { setActive(cat); return }
      }
      setActive('main')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="sticky top-[45px] z-10 bg-white border-b border-[#E5E5E5]">
      <div className="flex px-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => scrollTo(cat)}
            className={`flex-1 py-3 text-sm transition-colors border-b-2 ${
              active === cat ? 'border-gold text-text-primary font-bold' : 'border-transparent text-text-muted'
            }`}
          >
            {CATEGORY_LABELS[cat][lang]}
          </button>
        ))}
      </div>
    </div>
  )
}
