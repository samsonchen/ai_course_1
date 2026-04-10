import { useState } from 'react'
import { LanguageProvider } from './hooks/useLanguage'
import { Header } from './components/Header'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { CategoryNav } from './components/CategoryNav'
import { MenuSection } from './components/MenuSection'
import { ItemDetailModal } from './components/ItemDetailModal'
import { menuItems } from './data/menu-i18n'
import { CATEGORIES } from './data/site-info'
import type { MenuItem } from './types/menu'

function AppContent() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  return (
    <div className="max-w-[375px] mx-auto bg-bg-page min-h-screen">
      <Header />
      <LanguageSwitcher />
      <CategoryNav />
      {CATEGORIES.map((cat) => (
        <MenuSection
          key={cat}
          category={cat}
          items={menuItems.filter((item) => item.category === cat)}
          onOpenItem={setSelectedItem}
        />
      ))}
      {selectedItem && (
        <ItemDetailModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
