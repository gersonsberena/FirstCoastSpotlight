// Replace placeholder items with real screenshot paths once showcase demos are built
const showcases = [
  { label: "Fitness Coach — St. Johns County", href: "#" },
  { label: "Martial Arts Instructor — Duval County", href: "#" },
  { label: "Private Tutor — Clay County", href: "#" },
  { label: "Youth Sports Coach — Nassau County", href: "#" },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A47] mb-2 text-center">Recent Work Across the First Coast</h2>
        <p className="text-gray-500 text-center mb-12">Every site is built custom for the business — no cookie-cutter templates.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {showcases.map((s) => (
            <div key={s.label} className="border border-gray-100 rounded-lg overflow-hidden">
              <div className="bg-gray-100 h-48 flex items-center justify-center text-gray-300 text-sm">
                Screenshot coming soon
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-sm text-[#0F2A47] font-medium">{s.label}</span>
                <a href={s.href} className="text-[#C9A84C] text-sm hover:underline">View Site →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
