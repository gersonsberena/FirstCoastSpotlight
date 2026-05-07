export default function Contact() {
  return (
    <section id="contact" className="bg-[#0F2A47] px-6 py-20 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Ready to See What Your Site Could Look Like?</h2>
      <p className="text-white/60 mb-10">Request a free demo — no commitment, no sales pressure.</p>
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-[#C9A84C]"
        />
        <input
          type="text"
          placeholder="Business Type (e.g. Personal Trainer, Tutor)"
          className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-[#C9A84C]"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-[#C9A84C]"
        />
        <textarea
          placeholder="Anything else you want us to know? (optional)"
          rows={3}
          className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-[#C9A84C] resize-none"
        />
        <button
          type="submit"
          className="w-full bg-[#C9A84C] text-white py-3 rounded font-semibold hover:bg-[#b8963e] transition-colors"
        >
          Request My Free Demo
        </button>
      </form>
      <div className="mt-16 pt-8 border-t border-white/20 text-white/30 text-xs">
        © 2026 First Coast Spotlight · Northeast Florida
        <span className="mx-3">·</span>
        <a href="#" className="hover:text-white/60">Portfolio</a>
        <span className="mx-2">·</span>
        <a href="#" className="hover:text-white/60">Pricing</a>
        <span className="mx-2">·</span>
        <a href="#contact" className="hover:text-white/60">Contact</a>
      </div>
    </section>
  )
}
