export default function Hero() {
  return (
    <section className="bg-[#0F2A47] text-white px-6 py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Business Deserves to Be Found</h1>
      <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
        We build and maintain websites for local professionals across Duval, St. Johns, Clay, Nassau, and Putnam counties.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#portfolio" className="bg-[#C9A84C] text-white px-8 py-3 rounded font-semibold hover:bg-[#b8963e] transition-colors">See Our Work</a>
        <a href="#contact" className="border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white/10 transition-colors">Get a Free Demo</a>
      </div>
      <div className="mt-12 pt-6 border-t border-white/20 text-xs tracking-widest text-white/50 uppercase">
        Serving: Duval · St. Johns · Clay · Nassau · Putnam
      </div>
    </section>
  )
}
