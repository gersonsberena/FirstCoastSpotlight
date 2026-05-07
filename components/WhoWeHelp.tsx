const clients = [
  { label: "Solo Practitioners", desc: "Coaches, trainers, tutors, and consultants who run their own business." },
  { label: "Independent Professionals", desc: "Service providers who rely on their personal brand to attract clients." },
  { label: "Local Small Businesses", desc: "Any First Coast business that needs a clean online presence without the agency price tag." },
]

export default function WhoWeHelp() {
  return (
    <section className="bg-white px-6 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A47] mb-4">Built for Local Professionals</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12">
        We specialize in people who run their own business and need an online presence that works — without learning to code or hiring a full agency.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {clients.map((c) => (
          <div key={c.label} className="p-6 border border-gray-100 rounded-lg">
            <div className="w-10 h-10 bg-[#0F2A47]/10 rounded-full mx-auto mb-4" />
            <h3 className="font-semibold text-[#0F2A47] mb-2">{c.label}</h3>
            <p className="text-gray-500 text-sm">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
