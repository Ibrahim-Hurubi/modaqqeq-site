import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { UseCases } from "@/components/use-cases"
import { Technologies } from "@/components/technologies"
import { Dashboard } from "@/components/dashboard"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <Technologies />
      <Dashboard />
      <Footer />
    </main>
  )
}
