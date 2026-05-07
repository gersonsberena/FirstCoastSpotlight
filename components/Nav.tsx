export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0F2A47] px-6 py-4 flex items-center justify-between">
      <span className="text-white font-semibold text-lg tracking-tight">First Coast Spotlight</span>
      <div className="flex items-center gap-6">
        <a href="#portfolio" className="text-white/80 hover:text-white text-sm">Portfolio</a>
        <a href="#contact" className="bg-[#C9A84C] text-white text-sm px-4 py-2 rounded hover:bg-[#b8963e] transition-colors">Get a Demo</a>
      </div>
    </nav>
  )
}
