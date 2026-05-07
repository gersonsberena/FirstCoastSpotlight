export default function About() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-[#0F2A47]/10 rounded-lg h-72 flex items-center justify-center text-gray-400 text-sm">
          Your Photo Here
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#0F2A47] mb-4">Local. Personal. Reliable.</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            First Coast Spotlight is a one-person studio based in Northeast Florida. I build websites specifically for professionals in this region — because local businesses deserve better than generic templates and offshore agencies that don&apos;t know the market.
          </p>
          <p className="text-gray-500 leading-relaxed">
            When you work with me, you&apos;re not getting handed off to a junior developer. You get me — and I stick around every month to keep your site sharp.
          </p>
        </div>
      </div>
    </section>
  )
}
