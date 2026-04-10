import { useEffect, useRef, useState } from 'react'
import type { MenuItem } from '../types/menu'
import { useLanguage } from '../hooks/useLanguage'
import { TagBadge } from './TagBadge'
import { MARKET_PRICE, PRICE_OPTIONS_LABEL } from '../data/site-info'

export function ItemDetailModal({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  const { lang } = useLanguage()
  const [scale, setScale] = useState(1)
  const initialDistanceRef = useRef<number | null>(null)
  const initialScaleRef = useRef(1)
  const scrollYRef = useRef(0)

  useEffect(() => {
    scrollYRef.current = window.scrollY
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = ''; window.scrollTo(0, scrollYRef.current) }
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      initialDistanceRef.current = Math.sqrt(dx * dx + dy * dy)
      initialScaleRef.current = scale
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialDistanceRef.current !== null) {
      e.preventDefault()
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      const newDist = Math.sqrt(dx * dx + dy * dy)
      setScale(Math.max(1, Math.min(3, initialScaleRef.current * (newDist / initialDistanceRef.current))))
    }
  }

  const handleTouchEnd = () => { if (scale < 1.05) setScale(1); initialDistanceRef.current = null }

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[24px] overflow-y-auto max-h-[92vh]" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-center pt-3 pb-1"><div className="w-10 h-1 bg-[#DDDDDD] rounded-full" /></div>
        <div
          className="relative h-[220px] bg-emoji-bg flex items-center justify-center overflow-hidden select-none"
          onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}
          style={{ touchAction: 'none' }}
        >
          {item.image ? (
            <img src={`${import.meta.env.BASE_URL}images/${item.image}`} alt={item.names[lang]} className="w-full h-full object-cover" draggable={false}
              style={{ transform: `scale(${scale})`, transformOrigin: 'center', transition: scale === 1 ? 'transform 0.2s ease' : 'none' }} />
          ) : (
            <span className="text-[80px] leading-none"
              style={{ transform: `scale(${scale})`, transformOrigin: 'center', transition: scale === 1 ? 'transform 0.2s ease' : 'none' }}>
              {item.emoji}
            </span>
          )}
          <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/30 flex items-center justify-center text-white text-lg" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="px-5 pt-4 pb-10">
          <h2 className="font-noto text-[22px] font-bold text-text-primary mb-3 leading-snug">{item.names[lang]}</h2>
          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">{item.tags.map((tag) => <TagBadge key={tag} code={tag} />)}</div>
          )}
          <div className="h-px bg-[#EEEEEE] mb-4" />
          <p className="font-noto text-sm font-semibold text-text-muted mb-2">{PRICE_OPTIONS_LABEL[lang]}</p>
          <div className="space-y-2">
            {item.price.map((opt, i) => (
              <div key={i} className="flex justify-between items-center">
                {opt.label ? <span className="text-text-secondary text-sm">{opt.label[lang]}</span> : <span />}
                <span className="text-gold font-semibold text-sm ml-auto">
                  {opt.value === 'market' ? MARKET_PRICE[lang] : `NT$${opt.value}`}
                </span>
              </div>
            ))}
          </div>
          {item.desc[lang] && (<><div className="h-px bg-[#EEEEEE] my-4" /><p className="font-noto text-sm text-text-secondary leading-relaxed">{item.desc[lang]}</p></>)}
          {item.note[lang] && (<><div className="h-px bg-[#EEEEEE] my-4" /><p className="font-noto text-sm text-text-muted">* {item.note[lang]}</p></>)}
        </div>
      </div>
    </div>
  )
}
