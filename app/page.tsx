import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import WhoWeHelp from "@/components/WhoWeHelp"
import HowItWorks from "@/components/HowItWorks"
import Portfolio from "@/components/Portfolio"
import Pricing from "@/components/Pricing"
import About from "@/components/About"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <WhoWeHelp />
      <HowItWorks />
      <Portfolio />
      <Pricing />
      <About />
      <Contact />
    </>
  )
}
