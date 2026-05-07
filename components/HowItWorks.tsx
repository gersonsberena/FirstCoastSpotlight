const steps = [
  { num: "01", title: "We Build Your Demo", desc: "We create a personalized demo site for your business — no commitment required. See it before you decide." },
  { num: "02", title: "You Review & Approve", desc: "We customize it with your name, photos, services, and colors. One round of revisions included." },
  { num: "03", title: "We Keep It Running", desc: "We handle hosting, updates, and maintenance every month. You focus on your business." },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#F4F4F2] px-6 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A47] mb-12">Simple From Start to Launch</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {steps.map((s) => (
          <div key={s.num} className="text-left">
            <span className="text-5xl font-bold text-[#0F2A47]/15">{s.num}</span>
            <h3 className="text-lg font-semibold text-[#0F2A47] mt-2 mb-2">{s.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
