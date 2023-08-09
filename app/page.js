"use client"
import Navbar from "@/src/components/Navbar"
import Slideshow from "@/src/components/SlideShow"
import Products from "@/src/components/Products"
import About from "@/src/components/About"
import Footer from "@/src/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Slideshow />
      <Products />
      <About />
      <Footer />
    </main>
  )
}
