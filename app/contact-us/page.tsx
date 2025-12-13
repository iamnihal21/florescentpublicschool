"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Phone, Mail, MapPin, Clock, Send,
  MessageSquare, Users, AlertTriangle,
  Shield, Heart, BookOpen, GraduationCap
} from "lucide-react"

export default function ContactPage() {
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        studentGrade: "",
        subject: "",
        message: "",
        contactMethod: "email"
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    }, 1500)
  }

  const contactNumbers = [
    { department: "Main Office", number: "+91 11 2653 6789", ext: "100" },
    { department: "Admissions", number: "+91 11 2653 6790", ext: "101" },
    { department: "Principal's Office", number: "+91 11 2653 6791", ext: "102" },
    { department: "Accounts Department", number: "+91 11 2653 6792", ext: "103" },
    { department: "Transport Office", number: "+91 11 2653 6793", ext: "104" },
    { department: "IT Support", number: "+91 11 2653 6794", ext: "105" },
  ]

  const emergencyContacts = [
    { type: "Medical Emergency", number: "+91 98765 43210", person: "Dr. Sharma" },
    { type: "Security", number: "+91 98765 43211", person: "Mr. Singh" },
    { type: "Fire Emergency", number: "101", person: "Fire Station" },
    { type: "Police", number: "100", person: "Local Police" },
    { type: "Ambulance", number: "102", person: "Emergency Ambulance" },
    { type: "Child Helpline", number: "1098", person: "Child Helpline" },
  ]

  const supportHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
    { day: "Sunday", hours: "Emergency Only" },
    { day: "Holidays", hours: "Closed" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5"></div>

        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-10 right-10 w-64 h-64 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-secondary/10 text-chart-1 rounded-full text-sm font-semibold mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact <span className="text-chart-1">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              We're here to help! Reach out to us for any queries, concerns, or support you may need.
            </p>
            <div className="w-24 h-1 bg-chart-1 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                {/* Contact Information Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-chart-1" />
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-chart-1/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-chart-1" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email Address</h3>
                        <p className="text-muted-foreground">info@florescent.edu.in</p>
                        <p className="text-sm text-muted-foreground">admissions@florescent.edu.in</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-chart-1/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-chart-1" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">School Location</h3>
                        <p className="text-muted-foreground">
                          Florescent Public School<br />
                          Sector 15, Vasant Kunj<br />
                          New Delhi - 110070<br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-chart-1/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-chart-1" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                        <div className="space-y-2">
                          {supportHours.map((item, idx) => (
                            <div key={idx} className="flex justify-between">
                              <span className="text-muted-foreground">{item.day}</span>
                              <span className="font-medium text-foreground">{item.hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Response Stats */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-chart-1/5 to-chart-2/5 rounded-2xl p-6 md:p-8 border border-border"
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">Our Response Time</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Email Response</span>
                      <span className="font-bold text-chart-1">Within 24 hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Phone Response</span>
                      <span className="font-bold text-chart-1">Immediate</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Admission Queries</span>
                      <span className="font-bold text-chart-1">48 hours</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Enquiry Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        Send us a Message
                      </h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and we'll get back to you as soon as possible
                      </p>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-12 h-12 bg-chart-1/10 rounded-xl flex items-center justify-center">
                        <Send className="w-6 h-6 text-chart-1" />
                      </div>
                    </div>
                  </div>

                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                          <Heart className="w-4 h-4 text-green-500" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">Message Sent Successfully!</h4>
                          <p className="text-sm text-muted-foreground">
                            Thank you for contacting us. We'll respond to your query within 24 hours.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-chart-1"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-chart-1"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-chart-1"
                          placeholder="Enter phone number"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Student's Grade (if applicable)
                        </label>
                        <select
                          name="studentGrade"
                          value={formData.studentGrade}
                          onChange={handleChange}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-chart-1"
                        >
                          <option value="">Select Grade</option>
                          <option value="nursery">Nursery</option>
                          <option value="kg">Kindergarten</option>
                          <option value="1-5">Grades 1-5</option>
                          <option value="6-8">Grades 6-8</option>
                          <option value="9-10">Grades 9-10</option>
                          <option value="11-12">Grades 11-12</option>
                          <option value="alumni">Alumni</option>
                          <option value="parent">Parent/Guardian</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-chart-1"
                      >
                        <option value="">Select a subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="academic">Academic Matters</option>
                        <option value="transport">Transport Services</option>
                        <option value="fees">Fee Structure</option>
                        <option value="events">School Events</option>
                        <option value="feedback">Feedback/Suggestions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-chart-1"
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-4">
                        Preferred Contact Method
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {[
                          { id: "email", label: "Email", icon: Mail },
                          { id: "phone", label: "Phone Call", icon: Phone },
                          { id: "both", label: "Both", icon: MessageSquare },
                        ].map((method) => (
                          <label key={method.id} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="contactMethod"
                              value={method.id}
                              checked={formData.contactMethod === method.id}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${formData.contactMethod === method.id
                                ? 'border-chart-1 bg-chart-1/10'
                                : 'border-border hover:bg-muted'
                              }`}>
                              <method.icon className="w-4 h-4" />
                              <span>{method.label}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-8 py-4 bg-chart-1 text-chart-1-foreground font-bold rounded-xl hover:bg-chart-1/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telephone Numbers Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                <Phone className="w-8 h-8 text-chart-1" />
                Telephone Numbers
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Direct lines to various departments. Our staff is available during office hours to assist you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactNumbers.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-chart-1/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-chart-1" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{contact.department}</h3>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium text-foreground">{contact.number}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Extension: <span className="font-medium">{contact.ext}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contacts Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                <AlertTriangle className="w-8 h-8 text-red-500" />
                Emergency Contacts
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                For urgent matters requiring immediate attention. Please use these contacts responsibly.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-2xl p-6 md:p-8 border border-red-500/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {emergencyContacts.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-xl p-5 border border-border hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${contact.type.includes("Medical") ? "bg-red-500/10" :
                          contact.type.includes("Security") ? "bg-blue-500/10" :
                            contact.type.includes("Fire") ? "bg-orange-500/10" :
                              "bg-purple-500/10"
                        }`}>
                        <Shield className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-foreground">{contact.type}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span className="font-bold text-lg text-foreground">{contact.number}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Contact: {contact.person}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-red-500/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Emergency Procedures</h4>
                      <p className="text-sm text-muted-foreground">
                        All emergency contacts are monitored 24/7 by our security team
                      </p>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors duration-300">
                    Download Emergency Protocol
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                <MapPin className="w-8 h-8 text-chart-1" />
                School Location & Directions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visit our campus for a tour or to meet with our administrative staff
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Map Placeholder */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl overflow-hidden h-[400px] relative">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0244310670387!2d72.5199150753149!3d23.059565879147904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e835519d27f37%3A0xa903dd3f424f9a0f!2sFlorescent%20school!5e0!3m2!1sen!2sin!4v1763745880149!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="School Location Map"
                    />
                  </div>
                </div>
              </div>

              {/* Transportation Info */}
              <div className="space-y-6">
                <div className="bg-background rounded-2xl p-6 border border-border">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-chart-1" />
                    How to Reach Us
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">By Metro</h4>
                      <p className="text-sm text-muted-foreground">
                        Nearest station: Vasant Kunj Metro Station (5 minutes walk)
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">By Bus</h4>
                      <p className="text-sm text-muted-foreground">
                        Bus routes: 543, 621, 715 (Stop: Florescent Public School)
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">By Car</h4>
                      <p className="text-sm text-muted-foreground">
                        Ample parking available in the school premises
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-chart-1/5 to-chart-2/5 rounded-2xl p-6 border border-border">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-chart-1" />
                    Visiting Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">For Parents</span>
                      <span className="font-medium text-foreground">2:00 PM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">For Admissions</span>
                      <span className="font-medium text-foreground">10:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Campus Tours</span>
                      <span className="font-medium text-foreground">By Appointment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support & FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Need Additional <span className="text-chart-1">Support</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our resources or get in touch with our support team for assistance
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "FAQs",
                  description: "Browse frequently asked questions",
                  link: "#",
                  color: "bg-blue-500/10 text-blue-500"
                },
                {
                  icon: GraduationCap,
                  title: "Parent Portal",
                  description: "Access student information",
                  link: "#",
                  color: "bg-purple-500/10 text-purple-500"
                },
                {
                  icon: Users,
                  title: "Support Team",
                  description: "Contact our support specialists",
                  link: "#",
                  color: "bg-green-500/10 text-green-500"
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}