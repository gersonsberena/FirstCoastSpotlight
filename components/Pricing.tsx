const plans = [
  {
    name: "Starter",
    setup: "$297",
    monthly: "$75/mo",
    popular: false,
    features: ["6-section website", "Stock photos included", "Contact form", "1 update/month", "Hosting included"],
  },
  {
    name: "Growth",
    setup: "$497",
    monthly: "$125/mo",
    popular: true,
    features: ["Everything in Starter", "Your real photos (up to 12)", "Google Analytics", "2 updates/month"],
  },
  {
    name: "Pro",
    setup: "$797",
    monthly: "$175/mo",
    popular: false,
    features: ["Everything in Growth", "Video section (YouTube)", "Testimonials section", "Monthly analytics report", "4 updates/month", "Priority support"],
  },
]

export default function Pricing() {
  return (
    <section className="bg-[#0F2A47] px-6 py-20 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Simple, Honest Pricing</h2>
      <p className="text-white/60 mb-12">One setup fee. One monthly rate. No surprises.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((p) => (
          <div key={p.name} className={`rounded-lg p-8 text-left relative ${p.popular ? "bg-white text-[#0F2A47]" : "bg-[#1a3a5c]"}`}>
            {p.popular && (
              <span className="absolute top-4 right-4 bg-[#C9A84C] text-white text-xs px-3 py-1 rounded-full font-semibold">Most Popular</span>
            )}
            <h3 className="font-bold text-xl mb-1">{p.name}</h3>
            <div className="text-3xl font-bold mb-1">{p.setup} <span className="text-base font-normal opacity-60">setup</span></div>
            <div className="text-lg font-semibold mb-6 opacity-80">{p.monthly}</div>
            <ul className="space-y-2 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span className="text-[#C9A84C] mt-0.5">✓</span> {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="block text-center bg-[#C9A84C] text-white py-3 rounded font-semibold hover:bg-[#b8963e] transition-colors">Get Started</a>
          </div>
        ))}
      </div>
      <p className="text-white/40 text-xs mt-8">All plans include a 3-month minimum commitment. 30-day cancellation notice after that.</p>
    </section>
  )
}
