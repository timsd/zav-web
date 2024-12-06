'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import { Zap, Sofa, HardHat, MessageCircle } from 'lucide-react'

// UI Components
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

// Layout Components
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { navigationItems } from '@/config/constants'
import ParticleField from '@/components/effects/ParticleField'

// Custom Hooks
import { useFormState } from '@/app/services/hooks/useFormState'
import { useLocalStorage } from '@/app/services/hooks/useLocalStorage'
import { useTimezone } from '@/app/services/hooks/useTimezone'
import { trackBookingEvent } from '@/app/services/utils/analytics'


// Booking Components
import { BookingConfirmation } from '@/components/booking/BookingConfirmation'
import { BookingSummary } from '@/app/services/components/BookingSummary'
import { CalendarPicker } from '@/app/services/components/CalendarPicker'
import { TimeSlots } from '@/app/services/components/TimeSlots'
import { ConsultationForm } from '@/app/services/components/ConsultationForm'
import { ConsultationDialog } from '@/app/services/components/ConsultationDialog'


// Common Components
import { FormStateIndicator } from '@/app/services/components/FormStateIndicator'
import { LoadingSpinner } from '@/app/services/components/LoadingSpinner'
import { SuccessModal } from '@/app/services/components/SuccessModal'
import { ValidationMessage } from '@/app/services/components/ValidationMessage'

// Service Components
import { ServicesGrid } from '@/app/services/components/ServicesGrid'
import { ConsultationSection } from '@/app/services/components/ConsultationSection'
import { LiveChatSection } from '@/app/services/components/LiveChatSection'

// Context
import { ServicesContext } from '@/app/services/context/ServicesContext'

export default function ServicesPage() {
  // State declarations first
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedService, setSelectedService] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [expandedFAQs, setExpandedFAQs] = useState<{ [key: string]: number | null }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [bookingStep, setBookingStep] = useState(1)

  // Custom hooks
  const { formState, setFormState, formData, setFormData } = useFormState()
  const [savedFormData, setSavedFormData] = useLocalStorage('bookingFormData', formData)
  const { userTimezone, timeSlots, generateTimeSlots } = useTimezone()

  // First declare handleSubmitForm
  const handleSubmitForm = async () => {
    setIsSubmitting(true)
    try {
      // Admin notification
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'contact@zavolah.com',
          subject: 'New Consultation Booking',
          content: `
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
              <h1 style="color: #FF5722;">New Consultation Booking</h1>
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
                <h2>Booking Details</h2>
                <p><strong>Service:</strong> ${formData.service}</p>
                <p><strong>Date:</strong> ${formData.date}</p>
                <p><strong>Time:</strong> ${formData.time}</p>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Message:</strong> ${formData.message}</p>
              </div>
            </div>
          `
        })
      })

      // User confirmation
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: formData.email,
          subject: 'Your Zavolah Consultation Booking Confirmation',
          content: `
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
              <h1 style="color: #FF5722;">Your Consultation is Booked!</h1>
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
                <h2>Booking Details</h2>
                <p><strong>Service:</strong> ${formData.service}</p>
                <p><strong>Date:</strong> ${formData.date}</p>
                <p><strong>Time:</strong> ${formData.time}</p>
              </div>
              <p>We're excited to meet with you! A Zavolah advisor will be in touch shortly.</p>
            </div>
          `
        })
      })

      // Track successful booking
      await trackBookingEvent({
        eventName: 'booking_completed',
        service: formData.service,
        timestamp: Date.now(),
        userTimezone,
        status: 'completed'
      })

      setShowSuccessModal(true)
      resetForm()
    } catch (error) {
      console.error('Error:', error)
      await trackBookingEvent({
        eventName: 'booking_failed',
        service: formData.service,
        timestamp: Date.now(),
        userTimezone,
        status: 'failed'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlers = {
    setFormData: (data: any) => setFormData(data),
    handleSubmit: handleSubmitForm
  }

  const toggleFAQ = (serviceTitle: string, faqIndex: number) => {
    setExpandedFAQs(prev => ({
      ...prev,
      [serviceTitle]: prev[serviceTitle] === faqIndex ? null : faqIndex
    }))
  }

  const resetForm = () => {
    setSelectedService("")
    setSelectedDate(undefined)
    setSelectedTime("")
    setName("")
    setEmail("")
    setMessage("")
    setFormData({
      service: '',
      name: '',
      email: '',
      message: '',
      time: '',
      date: undefined
    })
    setBookingStep(1)
  }

  // Define renderBookingStep before using it
  const renderBookingStep = () => {
    switch(bookingStep) {
      case 1:
        return (
          <div className="flex gap-4">
            <CalendarPicker
              currentMonth={currentMonth}
              setCurrentMonth={setCurrentMonth}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            <TimeSlots
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              timeSlots={timeSlots}
            />
          </div>
        )
      case 2:
        return (
          <ConsultationForm
            formData={formData}
            setFormData={setFormData}
            selectedService={selectedService}
          />
        )
      case 3:
        return (
          <>
            <BookingSummary formData={formData} />
            <BookingConfirmation
              onConfirm={handleSubmitForm}
              isSubmitting={isSubmitting}
            />
          </>
        )
      default:
        return null
    }
  }

  const servicesState = {
    isDarkMode,
    formData,
    formState,
    userTimezone,
    expandedFAQs,
    toggleFAQ,
    handleSubmitForm,
    resetForm,
    renderBookingStep,
    isDialogOpen,
    setIsDialogOpen,
  }

  return (
    <ServicesContext.Provider value={servicesState}>
      <div className={`min-h-screen ${isDarkMode ? 'bg-[var(--color-black)]' : 'bg-[var(--color-white)]'} text-${isDarkMode ? 'white' : 'black'} flex flex-col`}>
        <Header isDarkMode={isDarkMode} navigationItems={navigationItems} />
        <main className="flex-grow">
          <ParticleField isDarkMode={isDarkMode} />
          <div className="container mx-auto p-4">
            <ServicesGrid />
            <ConsultationSection />
            <LiveChatSection />
          </div>
        </main>
        <Footer isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
        {showSuccessModal && (
          <SuccessModal
            onClose={() => {
              setShowSuccessModal(false)
              setIsDialogOpen(false)
              setShowConfirmation(false)
            }}
          />
        )}
      </div>
    </ServicesContext.Provider>
  )
}