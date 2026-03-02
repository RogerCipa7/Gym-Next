import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/sections/Hero'
import Concept from '@/components/sections/Concept'
import Facilities from '@/components/sections/Facilities'
import Classes from '@/components/sections/Classes'
import Trainers from '@/components/sections/Trainers'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import CTAFinal from '@/components/sections/CTAFinal'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Concept />
      <Facilities />
      <Classes />
      <Trainers />
      <Pricing />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  )
}
