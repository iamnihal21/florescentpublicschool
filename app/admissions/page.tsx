"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Download, CheckCircle, Calendar, FileText, UserCheck, CreditCard } from "lucide-react"

export default function AdmissionsPage() {
  const [activeProcessStep, setActiveProcessStep] = useState(1)
  const [showForm, setShowForm] = useState(false)

  const admissionProcess = [
    {
      step: 1,
      title: "Inquiry & Information",
      description: "Submit online inquiry or visit campus for information session",
      duration: "1-2 Days",
      icon: <FileText className="w-6 h-6" />,
      details: [
        "Fill online inquiry form",
        "Schedule campus tour",
        "Attend information session",
        "Receive prospectus"
      ]
    },
    {
      step: 2,
      title: "Application Submission",
      description: "Complete and submit application with required documents",
      duration: "3-5 Days",
      icon: <UserCheck className="w-6 h-6" />,
      details: [
        "Download application form",
        "Attach required documents",
        "Pay application fee",
        "Submit before deadline"
      ]
    },
    {
      step: 3,
      title: "Assessment & Interview",
      description: "Student assessment and parent interaction session",
      duration: "1 Week",
      icon: <CheckCircle className="w-6 h-6" />,
      details: [
        "Student aptitude assessment",
        "Parent interview",
        "Review of academic records",
        "Extracurricular evaluation"
      ]
    },
    {
      step: 4,
      title: "Admission Decision",
      description: "Review and communication of admission decision",
      duration: "2-3 Days",
      icon: <Calendar className="w-6 h-6" />,
      details: [
        "Committee review",
        "Merit-based selection",
        "Seat allotment",
        "Offer letter dispatch"
      ]
    },
    {
      step: 5,
      title: "Enrollment & Fee Payment",
      description: "Complete admission formalities and fee payment",
      duration: "3-5 Days",
      icon: <CreditCard className="w-6 h-6" />,
      details: [
        "Submit admission acceptance",
        "Complete fee payment",
        "Submit remaining documents",
        "Receive student ID"
      ]
    }
  ]

  const requiredDocuments = [
    {
      category: "Student Documents",
      items: [
        "Birth Certificate (Original + Copy)",
        "Previous School Report Card",
        "Transfer Certificate (If applicable)",
        "Aadhar Card Copy",
        "Passport Size Photos (4 copies)"
      ]
    },
    {
      category: "Parent/Guardian Documents",
      items: [
        "Parent Aadhar Cards (Copy)",
        "Parent PAN Card (Copy)",
        "Address Proof (Copy)",
        "Income Certificate (If applicable)",
        "Caste Certificate (If applicable)"
      ]
    },
    {
      category: "Additional Documents",
      items: [
        "Medical Certificate",
        "Disability Certificate (If applicable)",
        "Sports/Cultural Achievement Certificates",
        "Sibling Proof (If applicable)",
        "Passport & Visa (For NRI/Foreign Nationals)"
      ]
    }
  ]

  const importantDates = [
    { date: "January 15, 2025", event: "Admissions Open", status: "upcoming" },
    { date: "March 31, 2025", event: "Last Date for Applications", status: "upcoming" },
    { date: "April 15-30, 2025", event: "Assessments & Interviews", status: "upcoming" },
    { date: "May 15, 2025", event: "First Offer Letters", status: "upcoming" },
    { date: "June 10, 2025", event: "Admission Confirmation Deadline", status: "upcoming" }
  ]

  const handleDownloadBrochure = () => {
    // Mock brochure download
    const link = document.createElement('a')
    link.href = '/brochure.pdf'
    link.download = 'Florescent-Admissions-Brochure-2025.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-6">
              Admissions 2025-26
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Begin Your <span className="text-secondary">Journey</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join Florescent Public School - Where excellence meets opportunity. 
              Start your application process for the upcoming academic year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowForm(true)}
                className="px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Online Now
              </button>
              <button 
                onClick={handleDownloadBrochure}
                className="px-8 py-4 bg-transparent border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Admission <span className="text-secondary">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A streamlined 5-step process designed for convenience and transparency
            </p>
          </motion.div>

          {/* Process Steps - Desktop */}
          <div className="hidden md:block">
            <div className="flex justify-center mb-12">
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-secondary/20 via-accent/20 to-primary/20 transform -translate-y-1/2"></div>
                
                {/* Step Circles */}
                <div className="flex justify-between relative z-10">
                  {admissionProcess.map((step) => (
                    <button
                      key={step.step}
                      onClick={() => setActiveProcessStep(step.step)}
                      className={`flex flex-col items-center ${activeProcessStep === step.step ? 'active' : ''}`}
                    >
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                        activeProcessStep === step.step 
                          ? 'bg-secondary text-secondary-foreground scale-110 shadow-lg' 
                          : 'bg-card text-muted-foreground border border-border'
                      }`}>
                        {step.icon}
                      </div>
                      <span className={`text-sm font-medium ${activeProcessStep === step.step ? 'text-secondary' : 'text-muted-foreground'}`}>
                        Step {step.step}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Process Details */}
            <motion.div
              key={activeProcessStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {admissionProcess[activeProcessStep - 1].title}
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {admissionProcess[activeProcessStep - 1].description}
                    </p>
                  </div>
                  <div className="bg-secondary/10 text-secondary px-4 py-2 rounded-lg">
                    <span className="font-semibold">{admissionProcess[activeProcessStep - 1].duration}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-4">Key Activities</h4>
                    <ul className="space-y-3">
                      {admissionProcess[activeProcessStep - 1].details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-xl p-6">
                    <h4 className="font-bold text-foreground mb-4">Important Notes</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        All documents must be self-attested
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Keep digital copies ready
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Follow admission calendar strictly
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Contact admissions office for queries
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Process Steps - Mobile */}
          <div className="md:hidden space-y-6">
            {admissionProcess.map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: step.step * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-sm text-secondary font-semibold">Step {step.step}</div>
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{step.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">Duration:</span>
                  <span className="font-semibold text-secondary">{step.duration}</span>
                </div>
                
                <div className="space-y-2">
                  {step.details.map((detail, index) => (
                    <div key={index} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Required <span className="text-secondary">Documents</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Prepare these documents for a smooth admission process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {requiredDocuments.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                        {itemIndex + 1}
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Document Submission Guidelines</h4>
                <p className="text-muted-foreground">
                  All documents must be self-attested. Keep original documents for verification during admission.
                </p>
              </div>
              <button 
                onClick={handleDownloadBrochure}
                className="px-6 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-secondary/90 transition-colors duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                <Download className="w-5 h-5" />
                Download Complete Checklist
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Important <span className="text-secondary">Dates</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Mark your calendar for key admission deadlines
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 h-full w-1 bg-gradient-to-b from-secondary/20 to-accent/20 transform md:-translate-x-1/2"></div>
              
              {/* Dates */}
              <div className="space-y-8">
                {importantDates.map((date, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                  >
                    {/* Date Circle */}
                    <div className="w-20 h-20 bg-background border-4 border-background rounded-full flex items-center justify-center z-10 flex-shrink-0">
                      <div className="text-center">
                        <div className="text-lg font-bold text-secondary">{date.date.split(' ')[1]}</div>
                        <div className="text-xs text-muted-foreground">{date.date.split(' ')[0]}</div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} ml-6 md:ml-0`}>
                      <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-foreground">{date.event}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            date.status === 'upcoming' 
                              ? 'bg-secondary/10 text-secondary' 
                              : 'bg-accent/10 text-accent'
                          }`}>
                            {date.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{date.date}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-background rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Online Application Form</h3>
                  <p className="text-muted-foreground">Fill in your details to begin the admission process</p>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Student's Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground"
                      placeholder="Enter student's name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Applying for Grade *
                  </label>
                  <select className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground">
                    <option value="">Select Grade</option>
                    <option value="nursery">Nursery</option>
                    <option value="kg">KG</option>
                    <option value="1">Grade 1</option>
                    <option value="2">Grade 2</option>
                    <option value="3">Grade 3</option>
                    <option value="4">Grade 4</option>
                    <option value="5">Grade 5</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground"
                    placeholder="Enter parent/guardian name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div className="bg-card rounded-lg p-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="text-sm text-muted-foreground">
                      I agree to the terms and conditions and privacy policy
                    </span>
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 border-2 border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-secondary/90 transition-colors duration-300"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-background rounded-2xl p-8 md:p-12 border border-border shadow-lg">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to Begin Your Florescent Journey?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Download our comprehensive admission brochure for detailed information about 
                our curriculum, facilities, fee structure, and admission guidelines.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setShowForm(true)}
                  className="px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Apply Online Now
                </button>
                <button 
                  onClick={handleDownloadBrochure}
                  className="px-8 py-4 bg-transparent border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Complete Brochure
                </button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Need assistance? Contact our admission office at 
                  <span className="text-secondary font-medium ml-1">admissions@florescent.edu.in</span> 
                  or call <span className="text-secondary font-medium">+91-9876543210</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}