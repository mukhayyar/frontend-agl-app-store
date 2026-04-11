// Category metadata: slug → { displayName, icon (emoji), color classes }
export const CATEGORY_META: Record<string, { displayName: string; icon: string; color: string }> = {
  AudioVideo:    { displayName: "Music & Video",      icon: "🎵", color: "bg-purple-100 text-purple-700 border-purple-200" },
  Development:   { displayName: "Development",        icon: "💻", color: "bg-blue-100 text-blue-700 border-blue-200" },
  Game:          { displayName: "Games",              icon: "🎮", color: "bg-red-100 text-red-700 border-red-200" },
  Graphics:      { displayName: "Graphics & Design",  icon: "🎨", color: "bg-pink-100 text-pink-700 border-pink-200" },
  Network:       { displayName: "Internet & Network", icon: "🌐", color: "bg-cyan-100 text-cyan-700 border-cyan-200" },
  Office:        { displayName: "Office",             icon: "📄", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
  Education:     { displayName: "Education",          icon: "📚", color: "bg-green-100 text-green-700 border-green-200" },
  Science:       { displayName: "Science & Research", icon: "🔬", color: "bg-teal-100 text-teal-700 border-teal-200" },
  System:        { displayName: "System Tools",       icon: "⚙️", color: "bg-gray-100 text-gray-700 border-gray-200" },
  Utility:       { displayName: "Utilities",          icon: "🔧", color: "bg-orange-100 text-orange-700 border-orange-200" },
  Settings:      { displayName: "Settings",           icon: "🛠️", color: "bg-slate-100 text-slate-700 border-slate-200" },
  Accessibility: { displayName: "Accessibility",      icon: "♿", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
}

export function getCategoryMeta(slug: string) {
  return CATEGORY_META[slug] ?? { displayName: slug, icon: "📦", color: "bg-muted text-muted-foreground border-border" }
}
