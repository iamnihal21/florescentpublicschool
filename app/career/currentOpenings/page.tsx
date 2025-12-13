"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Search, Filter, MapPin, Clock, BookOpen, Users, Calculator, Palette, Music, Globe, Briefcase, FileText, Send, Calendar, GraduationCap } from "lucide-react"

export default function CurrentOpeningsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showApplicationForm, setShowApplicationForm] = useState<string | null>(null)

  const jobCategories = [
    { id: "all", label: "All Openings", icon: <Briefcase className="w-5 h-5" />, count: 15 },
    { id: "teaching", label: "Teaching", icon: <BookOpen className="w-5 h-5" />, count: 8 },
    { id: "administrative", label: "Administrative", icon: <Users className="w-5 h-5" />, count: 4 },
    { id: "support", label: "Support Staff", icon: <GraduationCap className="w-5 h-5" />, count: 3 },
  ]

  const jobOpenings = [
    {
      id: "math-teacher",
      title: "Senior Mathematics Teacher",
      category: "teaching",
      department: "Secondary School",
      type: "Full-time",
      experience: "5+ years",
      location: "Main Campus",
      deadline: "2024-03-15",
      salary: "₹45,000 - ₹60,000/month",
      description: "We are seeking an experienced Mathematics teacher for Grades 9-12 with expertise in advanced mathematics and innovative teaching methodologies.",
      requirements: [
        "M.Sc. in Mathematics or related field",
        "B.Ed. degree mandatory",
        "Experience with CBSE curriculum",
        "Strong analytical and problem-solving skills",
        "Excellent communication abilities"
      ],
      responsibilities: [
        "Teach Mathematics to Grades 9-12",
        "Develop lesson plans and teaching materials",
        "Conduct assessments and provide feedback",
        "Guide students for competitive exams",
        "Participate in curriculum development"
      ],
      benefits: [
        "Performance-based bonuses",
        "Professional development opportunities",
        "Health insurance coverage",
        "On-campus housing option"
      ]
    },
    {
      id: "science-teacher",
      title: "Physics Teacher",
      category: "teaching",
      department: "Senior Secondary",
      type: "Full-time",
      experience: "3+ years",
      location: "Science Block",
      deadline: "2024-03-20",
      salary: "₹40,000 - ₹55,000/month",
      description: "Looking for a passionate Physics teacher with hands-on laboratory experience and ability to make complex concepts understandable.",
      requirements: [
        "M.Sc. in Physics",
        "B.Ed. qualification",
        "Laboratory management skills",
        "Knowledge of modern teaching aids",
        "Student-centered teaching approach"
      ],
      responsibilities: [
        "Teach Physics for Grades 11-12",
        "Conduct laboratory sessions",
        "Prepare students for board exams",
        "Maintain lab equipment",
        "Organize science exhibitions"
      ],
      benefits: [
        "Research grant opportunities",
        "Conference attendance support",
        "Modern lab facilities",
        "Mentorship program"
      ]
    },
    {
      id: "english-teacher",
      title: "English Language Teacher",
      category: "teaching",
      department: "Primary School",
      type: "Full-time",
      experience: "2+ years",
      location: "Primary Block",
      deadline: "2024-03-18",
      salary: "₹35,000 - ₹48,000/month",
      description: "Creative English teacher needed for primary grades with focus on language development and communication skills.",
      requirements: [
        "MA in English",
        "B.Ed. or equivalent",
        "Excellent command of English",
        "Experience with phonics teaching",
        "Creative teaching methodologies"
      ],
      responsibilities: [
        "Teach English to Grades 1-5",
        "Develop reading programs",
        "Conduct language labs",
        "Organize literary events",
        "Assess language proficiency"
      ],
      benefits: [
        "Language certification support",
        "Resource material allowance",
        "Workshop opportunities",
        "Flexible teaching hours"
      ]
    },
    {
      id: "admissions-officer",
      title: "Admissions Officer",
      category: "administrative",
      department: "Administration",
      type: "Full-time",
      experience: "3+ years",
      location: "Admin Building",
      deadline: "2024-03-25",
      salary: "₹38,000 - ₹52,000/month",
      description: "Dynamic admissions officer to manage student admissions, parent interactions, and enrollment processes.",
      requirements: [
        "Graduate degree in any discipline",
        "Excellent communication skills",
        "Experience in customer service",
        "Computer proficiency",
        "Multitasking abilities"
      ],
      responsibilities: [
        "Handle admission inquiries",
        "Process applications",
        "Conduct parent interviews",
        "Maintain admission records",
        "Coordinate admission events"
      ],
      benefits: [
        "Performance incentives",
        "Communication training",
        "Professional development",
        "Quarterly bonuses"
      ]
    },
    {
      id: "lab-assistant",
      title: "Science Lab Assistant",
      category: "support",
      department: "Science Department",
      type: "Full-time",
      experience: "1+ years",
      location: "Science Laboratories",
      deadline: "2024-03-22",
      salary: "₹25,000 - ₹35,000/month",
      description: "Lab assistant for physics, chemistry, and biology laboratories with equipment maintenance responsibilities.",
      requirements: [
        "B.Sc. in Science",
        "Laboratory experience",
        "Equipment handling knowledge",
        "Safety procedures awareness",
        "Basic computer skills"
      ],
      responsibilities: [
        "Prepare lab materials",
        "Maintain equipment",
        "Ensure lab safety",
        "Assist during experiments",
        "Inventory management"
      ],
      benefits: [
        "Safety training",
        "Uniform allowance",
        "Health checkups",
        "Skill development"
      ]
    },
    {
      id: "counselor",
      title: "School Counselor",
      category: "administrative",
      department: "Student Services",
      type: "Full-time",
      experience: "4+ years",
      location: "Counseling Center",
      deadline: "2024-03-30",
      salary: "₹42,000 - ₹58,000/month",
      description: "Qualified counselor to provide guidance and support to students for academic and personal development.",
      requirements: [
        "MA in Psychology/Counseling",
        "Counseling certification",
        "Experience with adolescents",
        "Empathy and listening skills",
        "Crisis management abilities"
      ],
      responsibilities: [
        "Student counseling sessions",
        "Career guidance",
        "Parent workshops",
        "Crisis intervention",
        "Wellness programs"
      ],
      benefits: [
        "Advanced training",
        "Conference participation",
        "Private counseling space",
        "Supervision support"
      ]
    }
  ]

  const filteredJobs = jobOpenings.filter(job => {
    const matchesCategory = activeCategory === "all" || job.category === activeCategory
    const matchesSearch = searchQuery === "" || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleApply = (jobId: string) => {
    setShowApplicationForm(jobId)
  }

  const ApplicationForm = ({ job }: { job: typeof jobOpenings[0] }) => (
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
              <h3 className="text-2xl font-bold text-foreground">Apply for {job.title}</h3>
              <p className="text-muted-foreground">Department: {job.department}</p>
            </div>
            <button
              onClick={() => setShowApplicationForm(null)}
              className="text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </div>

          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault()
            alert(`Application submitted for ${job.title}`)
            setShowApplicationForm(null)
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Total Experience *
                </label>
                <select required className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground">
                  <option value="">Select experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Highest Qualification *
              </label>
              <input
                type="text"
                required
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground"
                placeholder="e.g., M.Sc., B.Ed., Ph.D."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Cover Letter *
              </label>
              <textarea
                required
                rows={4}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground"
                placeholder="Tell us why you're interested in this position..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Upload Resume (PDF/DOC) *
              </label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-2">Drop your resume here or click to browse</p>
                <input type="file" accept=".pdf,.doc,.docx" required className="block w-full text-sm text-muted-foreground" />
                <p className="text-xs text-muted-foreground mt-2">Maximum file size: 5MB</p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-4">
              <label className="flex items-center">
                <input type="checkbox" required className="mr-3" />
                <span className="text-sm text-muted-foreground">
                  I confirm that all information provided is accurate and complete
                </span>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={() => setShowApplicationForm(null)}
                className="px-6 py-3 border-2 border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-secondary text-accent-foreground font-bold rounded-lg hover:bg-secondary/90 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )

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
            <span className="inline-block px-4 py-2 bg-secondary/10 text-accent rounded-full text-sm font-semibold mb-6">
              Current Openings
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Join Our <span className="text-accent">Team</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore exciting career opportunities at Florescent Public School. 
              Be part of a team that shapes future generations.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search positions by title, department, or keywords..."
                  className="w-full bg-card border border-border rounded-xl pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            {/* Category Filters */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-foreground mb-4">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {jobCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-accent text-accent-foreground shadow'
                        : 'bg-card text-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    {category.icon}
                    {category.label}
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === category.id
                        ? 'bg-secondary-foreground/20'
                        : 'bg-muted'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Job Count */}
            <div className="mb-8">
              <p className="text-muted-foreground">
                Showing <span className="font-bold text-foreground">{filteredJobs.length}</span> of {jobOpenings.length} positions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">No positions found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-background rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        {/* Job Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              job.category === 'teaching' ? 'bg-blue-500/10 text-blue-500' :
                              job.category === 'administrative' ? 'bg-purple-500/10 text-purple-500' :
                              'bg-green-500/10 text-green-500'
                            }`}>
                              {job.department}
                            </span>
                            <span className="px-3 py-1 bg-secondary/10 text-accent rounded-full text-xs font-medium">
                              {job.type}
                            </span>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-foreground mb-3">{job.title}</h3>
                          <p className="text-muted-foreground mb-6">{job.description}</p>
                          
                          <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{job.experience} experience</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">Apply by: {job.deadline}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Salary & Apply */}
                        <div className="lg:w-64">
                          <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-xl p-5 mb-4">
                            <div className="text-lg font-bold text-foreground mb-2">{job.salary}</div>
                            <div className="text-sm text-muted-foreground">Monthly compensation</div>
                          </div>
                          
                          <button
                            onClick={() => handleApply(job.id)}
                            className="w-full px-6 py-3 bg-secondary text-accent-foreground font-bold rounded-lg hover:bg-secondary/90 transition-colors duration-300 flex items-center justify-center gap-2"
                          >
                            <Send className="w-5 h-5" />
                            Apply Now
                          </button>
                        </div>
                      </div>
                      
                      {/* Quick Details */}
                      <div className="mt-8 pt-8 border-t border-border">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-bold text-foreground mb-3">Key Requirements</h4>
                            <ul className="space-y-2">
                              {job.requirements.slice(0, 3).map((req, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <div className="w-4 h-4 bg-secondary/10 text-accent rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                                    ✓
                                  </div>
                                  <span className="text-muted-foreground">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-bold text-foreground mb-3">Responsibilities</h4>
                            <ul className="space-y-2">
                              {job.responsibilities.slice(0, 3).map((resp, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <div className="w-4 h-4 bg-accent/10 text-accent rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                                    •
                                  </div>
                                  <span className="text-muted-foreground">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-bold text-foreground mb-3">Benefits</h4>
                            <ul className="space-y-2">
                              {job.benefits.slice(0, 3).map((benefit, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <div className="w-4 h-4 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                                    ★
                                  </div>
                                  <span className="text-muted-foreground">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
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
              Hiring <span className="text-accent">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our transparent and efficient recruitment process
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Line */}
              <div className="absolute left-0 top-1/2 h-1 w-full bg-gradient-to-r from-secondary/20 via-accent/20 to-primary/20 transform -translate-y-1/2 hidden md:block"></div>
              
              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                {[
                  { step: 1, title: "Application", desc: "Submit online application with resume", icon: "📝" },
                  { step: 2, title: "Screening", desc: "Resume review by HR team", icon: "👁️" },
                  { step: 3, title: "Interview", desc: "Technical & HR interviews", icon: "💬" },
                  { step: 4, title: "Demo", desc: "Teaching demonstration", icon: "🎯" },
                  { step: 5, title: "Offer", desc: "Job offer & onboarding", icon: "🎉" },
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-background border-4 border-background rounded-full mb-4">
                      <div className="w-12 h-12 bg-secondary text-accent-foreground rounded-full flex items-center justify-center text-xl">
                        {step.icon}
                      </div>
                    </div>
                    <div className="text-sm text-accent font-semibold mb-2">Step {step.step}</div>
                    <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Tips */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                Application <span className="text-accent">Tips</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-foreground mb-4">Do's</h4>
                  <ul className="space-y-3">
                    {[
                      "Tailor your resume to the position",
                      "Highlight relevant teaching experience",
                      "Include certifications and training",
                      "Write a personalized cover letter",
                      "Proofread all documents",
                      "Prepare for teaching demonstration"
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </div>
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-4">Don'ts</h4>
                  <ul className="space-y-3">
                    {[
                      "Submit generic applications",
                      "Forget to attach documents",
                      "Ignore application deadlines",
                      "Use unprofessional email",
                      "Underestimate preparation",
                      "Neglect follow-up communication"
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          ✗
                        </div>
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-background rounded-2xl p-8 md:p-12 border border-border shadow-lg">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Questions About Applications?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our HR team is here to help you through the application process
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 text-accent rounded-xl mb-4">
                    <Send className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Email</h4>
                  <p className="text-muted-foreground">hr@florescent.edu.in</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 text-accent rounded-xl mb-4">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Office Hours</h4>
                  <p className="text-muted-foreground">Mon-Fri, 9:00 AM - 5:00 PM</p>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-4">Response Time</h4>
                <p className="text-muted-foreground text-sm">
                  Applications are reviewed within <span className="text-accent font-medium">3-5 business days</span>. 
                  Shortlisted candidates will be contacted for the next steps.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <ApplicationForm job={jobOpenings.find(job => job.id === showApplicationForm)!} />
      )}
    </div>
  )
}