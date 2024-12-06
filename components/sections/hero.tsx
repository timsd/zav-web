import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { typingQuestions } from '@/config/constants'
import Link from 'next/link'

export function HeroSection({
  typingText,
  currentTypingIndex,
  showCursor,
  slides,
  currentSlide,
  prevSlide,
  nextSlide,
  isDarkMode
}) {
  const buttonConfig = {
    0: { link: '/services', text: 'Explore Our Services' },
    1: { link: '/marketplace', text: 'Visit Marketplace' },
    2: { link: '/store', text: 'Shop Now' }
  }

    // Slide-specific button styles
    const slideButtonClasses = "group inline-flex items-center gap-2 relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 transform hover:scale-105 transition-all px-6 py-3"
    const slideButtonTextClasses = "font-medium text-white group-hover:text-[var(--color-orange)]"
    const arrowClasses = "text-white group-hover:text-[var(--color-orange)]"
  
  return (
    <section className="container mx-auto px-4">
      <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
       
        {/* Left Content */}
        <div className="flex flex-col items-start z-10">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 relative"
            style={{
              color: typingQuestions[currentTypingIndex].color === 'var(--color-white)' && !isDarkMode
                ? 'var(--color-white)'
                : typingQuestions[currentTypingIndex].color
            }}
          >
            {typingText}
            {showCursor && <span className="animate-blink">|</span>}
          </motion.h2>

          <div className="space-y-2 backdrop-blur-sm bg-black/5 p-6 rounded-xl">
            <p className="text-lg flex items-center" style={{ color: 'var(--color-green)' }}>
              <span className="mr-2 text-xl">✱</span>
              Good design, structure
            </p>
            <p className="text-lg flex items-center" style={{ color: 'var(--color-orange)' }}>
              <span className="mr-2 text-xl">✱</span>
              Functional Smart furniture
            </p>
            <p className="text-lg flex items-center" style={{ color: 'var(--color-white)' }}>
              <span className="mr-2 text-xl">✱</span>
              Self owned 24/7 power supply
            </p>
          </div>

          <Button
            className="mt-6 bg-[var(--color-orange)] text-white hover:bg-[var(--color-green)] transform hover:scale-105 transition-all"
            onClick={() => window.location.href = '/services'}
          >
            SEE MORE DETAILS
          </Button>
        </div>

          {/* Right Slider */}
        <div className="relative mt-8 md:mt-0 group">
          
        <AnimatePresence mode="wait">
  <motion.div
    key={currentSlide}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.05 }}
    transition={{ duration: 0.5 }}
    className="relative rounded-2xl overflow-hidden shadow-2xl"
  >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-lg mb-8 text-white/90">
                    {slides[currentSlide].description}
                  </p>
        {/* Slide-specific buttons */}

        {currentSlide === 0 && (
  <Button
    className="group inline-flex items-center gap-2 relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 transform hover:scale-105 transition-all px-6 py-3"
    onClick={() => window.location.href = '/services'}
  >
    <span className="font-medium text-white group-hover:text-[var(--color-orange)]">
      Explore Our Services
    </span>
    <motion.span className="text-white group-hover:text-[var(--color-orange)]">→</motion.span>
  </Button>
)}


{currentSlide === 1 && (
  <Button
    className="group inline-flex items-center gap-2 relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 transform hover:scale-105 transition-all px-6 py-3"
    onClick={() => window.location.href = '/marketplace'}
  >
    <span className="font-medium text-white group-hover:text-[var(--color-orange)]">
    Visit Marketplace
    </span>
    <motion.span className="text-white group-hover:text-[var(--color-orange)]">→</motion.span>
  </Button>
)}


{currentSlide === 2 && (
  <Button
    className="group inline-flex items-center gap-2 relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 transform hover:scale-105 transition-all px-6 py-3"
    onClick={() => window.location.href = '/store'}
  >
    <span className="font-medium text-white group-hover:text-[var(--color-orange)]">
    Shop Now
    </span>
    <motion.span className="text-white group-hover:text-[var(--color-orange)]">→</motion.span>
  </Button>
)}


  </div>
  </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full transform hover:scale-110 transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full transform hover:scale-110 transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
