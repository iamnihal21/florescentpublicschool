"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Phone, Mail, MapPin, Clock, Send,
  MessageSquare, AlertTriangle,
  Heart,
} from "lucide-react"
import { ContactPage as ContactData } from "@/payload/payload-types"

export default function ContactView({ data }: { data: ContactData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentGrade: "",
    subject: "",
    message: "",
    contactMethod: "email"
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", phone: "", studentGrade: "", subject: "", message: "", contactMethod: "email" })
      setTimeout(() => setSubmitSuccess(false), 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-chart-1 rounded-full text-sm font-semibold mb-6">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {data.hero?.title?.split(' ')[0]} <span className="text-chart-1">{data.hero?.title?.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {data.hero?.subtitle}
            </p>
            <div className="w-24 h-1 bg-chart-1 mx-auto"></div>
          </motion.div>
        </div>

        <div className="relative md:mt-20 mt-10">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2"></div>
          <div className="relative flex justify-center">
            <div className="bg-background px-8 py-3 border border-border/50 rounded-full shadow-lg">
              <span className="text-base font-medium text-foreground flex items-center gap-2">
                <span className="text-primary">✦</span>
                Here To Guide You Forward
                <span className="text-primary">✦</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-8">
                <motion.div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-chart-1" /> Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-chart-1/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-chart-1" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email Address</h3>
                        {data.mainInfo?.emails?.map((item, i) => (
                          <p key={i} className="text-muted-foreground text-sm">{item.email}</p>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-chart-1/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-chart-1" />
                      </div>
                      <div className="whitespace-pre-line text-muted-foreground">
                        <h3 className="font-semibold text-foreground mb-1">School Location</h3>
                        {data.mainInfo?.address}
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-chart-1/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-chart-1" />
                      </div>
                      <div className="w-full">
                        <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                        <div className="space-y-2">
                          {data.mainInfo?.supportHours?.map((item, idx) => (
                            <div key={idx} className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{item.day}</span>
                              <span className="font-medium text-foreground">{item.hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Form Section - Exactly as provided */}
              <div className="lg:col-span-2">
                <motion.div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Send us a Message</h2>
                    <Send className="w-6 h-6 text-chart-1 hidden md:block" />
                  </div>
                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3">
                      <Heart className="w-4 h-4 text-green-500" />
                      <p className="text-sm font-bold">Message Sent Successfully!</p>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* ... (Your exact form inputs here) ... */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-background border border-border rounded-xl px-4 py-3" placeholder="Full Name" />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-background border border-border rounded-xl px-4 py-3" placeholder="Email" />
                    </div>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-background border border-border rounded-xl px-4 py-3" placeholder="Message" />
                    <button type="submit" disabled={isSubmitting} className="px-8 py-4 bg-chart-1 text-white font-bold rounded-xl disabled:opacity-50 flex items-center gap-3">
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Contact Numbers Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Phone className="w-8 h-8 text-chart-1" /> Telephone Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.contactNumbers?.map((contact, index) => (
              <div key={index} className="bg-background p-6 rounded-2xl border border-border">
                <h3 className="font-bold mb-2">{contact.department}</h3>
                <p className="text-chart-1 font-medium">{contact.number}</p>
                <p className="text-xs text-muted-foreground">Ext: {contact.ext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Emergency Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3 text-red-500">
            <AlertTriangle className="w-8 h-8" /> Emergency Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.emergencyContacts?.map((contact, index) => (
              <div key={index} className="bg-background p-6 rounded-2xl border border-red-500/20">
                <h3 className="font-bold mb-2">{contact.type}</h3>
                <p className="text-lg font-bold">{contact.number}</p>
                <p className="text-sm text-muted-foreground">{contact.person}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}