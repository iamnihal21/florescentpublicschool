"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { 
  Calendar, Clock, FileText, Download, 
  Bell, BookOpen, CreditCard, Users,
  CheckCircle, AlertCircle, Printer,
  ChevronDown, ChevronUp, Search,
  Filter, Bookmark, Share2, Eye
} from "lucide-react"

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState("exams")
  const [expandedNotice, setExpandedNotice] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Examination Schedule Data
  const examSchedules = [
    {
      term: "Term I - Annual Examination",
      date: "March 15-30, 2024",
      classes: "Nursery - Grade 12",
      status: "Upcoming",
      color: "bg-red-500/10 text-red-500"
    },
    {
      term: "Term II - Half Yearly",
      date: "October 10-25, 2024",
      classes: "Grade 1-12",
      status: "Upcoming",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      term: "Unit Test I",
      date: "April 5-10, 2024",
      classes: "All Classes",
      status: "Completed",
      color: "bg-green-500/10 text-green-500"
    },
    {
      term: "Practical Examinations",
      date: "March 5-12, 2024",
      classes: "Grade 9-12",
      status: "Ongoing",
      color: "bg-yellow-500/10 text-yellow-500"
    },
    {
      term: "Pre-Board Exams",
      date: "January 15-30, 2024",
      classes: "Grade 10 & 12",
      status: "Completed",
      color: "bg-green-500/10 text-green-500"
    },
    {
      term: "Term III - Final Exams",
      date: "February 1-15, 2025",
      classes: "All Classes",
      status: "Upcoming",
      color: "bg-red-500/10 text-red-500"
    },
  ]

  // PTM Schedule Data
  const ptmSchedules = [
    {
      date: "March 20, 2024",
      time: "9:00 AM - 1:00 PM",
      classes: "Nursery - Grade 5",
      venue: "School Auditorium",
      type: "Regular PTM"
    },
    {
      date: "March 21, 2024",
      time: "9:00 AM - 1:00 PM",
      classes: "Grade 6-8",
      venue: "School Auditorium",
      type: "Regular PTM"
    },
    {
      date: "March 22, 2024",
      time: "9:00 AM - 1:00 PM",
      classes: "Grade 9-12",
      venue: "School Auditorium",
      type: "Regular PTM"
    },
    {
      date: "April 5, 2024",
      time: "2:00 PM - 4:00 PM",
      classes: "Grade 10 & 12",
      venue: "Principal's Office",
      type: "Special Meeting"
    },
    {
      date: "October 15, 2024",
      time: "9:00 AM - 1:00 PM",
      classes: "All Classes",
      venue: "School Auditorium",
      type: "Mid-term PTM"
    },
  ]

  // Fee Payment Information
  const feePayments = [
    {
      installment: "Quarter 1",
      dueDate: "April 10, 2024",
      amount: "₹25,000",
      status: "Due",
      lateFee: "₹500 after April 15"
    },
    {
      installment: "Quarter 2",
      dueDate: "July 10, 2024",
      amount: "₹25,000",
      status: "Upcoming",
      lateFee: "₹500 after July 15"
    },
    {
      installment: "Quarter 3",
      dueDate: "October 10, 2024",
      amount: "₹25,000",
      status: "Upcoming",
      lateFee: "₹500 after October 15"
    },
    {
      installment: "Quarter 4",
      dueDate: "January 10, 2025",
      amount: "₹25,000",
      status: "Upcoming",
      lateFee: "₹500 after January 15"
    },
    {
      installment: "Transport Fee",
      dueDate: "Monthly - 5th",
      amount: "₹3,500/month",
      status: "Monthly",
      lateFee: "₹200 after 5th"
    },
    {
      installment: "Annual Charges",
      dueDate: "April 1, 2024",
      amount: "₹15,000",
      status: "Paid",
      lateFee: "N/A"
    },
  ]

  // Notices Data
  const notices = [
    {
      id: 1,
      title: "Annual Day Celebrations",
      date: "March 25, 2024",
      category: "Event",
      priority: "Important",
      content: "The school will be celebrating Annual Day on March 25, 2024. All students must report by 3:00 PM in their respective classrooms. Parents are cordially invited to attend the function starting at 4:00 PM in the school auditorium.",
      attachments: ["Invitation.pdf", "Program Schedule.docx"]
    },
    {
      id: 2,
      title: "Summer Vacation Schedule",
      date: "May 1, 2024",
      category: "Holiday",
      priority: "General",
      content: "Summer vacation will begin from May 15, 2024. School will reopen on July 1, 2024. All homework assignments will be uploaded on the parent portal.",
      attachments: ["Vacation Homework.pdf"]
    },
    {
      id: 3,
      title: "Library Book Return",
      date: "March 18, 2024",
      category: "Academic",
      priority: "Urgent",
      content: "All library books must be returned by March 20, 2024 for annual stock verification. Fines will be imposed for late returns.",
      attachments: []
    },
    {
      id: 4,
      title: "Sports Day Practice Schedule",
      date: "March 10, 2024",
      category: "Sports",
      priority: "Important",
      content: "Practice sessions for Annual Sports Day will be conducted from March 12-20, 2024. All participants must attend the practice sessions regularly.",
      attachments: ["Practice Schedule.pdf"]
    },
    {
      id: 5,
      title: "Parent-Teacher Meeting",
      date: "March 15, 2024",
      category: "Meeting",
      priority: "Important",
      content: "The next Parent-Teacher Meeting is scheduled for March 20-22, 2024. Please book your slot through the parent portal.",
      attachments: ["PTM Schedule.pdf"]
    },
    {
      id: 6,
      title: "Fee Payment Extension",
      date: "March 5, 2024",
      category: "Finance",
      priority: "Urgent",
      content: "Last date for fee payment for Quarter 1 has been extended to April 10, 2024. Please ensure payment is made before the due date to avoid late fees.",
      attachments: ["Fee Structure.pdf", "Payment Methods.docx"]
    },
  ]

  // School Policies
  const schoolPolicies = [
    {
      category: "Attendance Policy",
      lastUpdated: "Jan 2024",
      description: "Rules regarding student attendance, leaves, and punctuality",
      fileSize: "245 KB"
    },
    {
      category: "Examination Rules",
      lastUpdated: "Feb 2024",
      description: "Guidelines for examinations, grading system, and evaluation",
      fileSize: "312 KB"
    },
    {
      category: "Code of Conduct",
      lastUpdated: "Jan 2024",
      description: "Expected behavior and disciplinary procedures",
      fileSize: "189 KB"
    },
    {
      category: "Uniform Policy",
      lastUpdated: "Dec 2023",
      description: "Dress code and uniform requirements",
      fileSize: "156 KB"
    },
    {
      category: "Transport Rules",
      lastUpdated: "Jan 2024",
      description: "Bus schedules, safety rules, and transportation guidelines",
      fileSize: "278 KB"
    },
    {
      category: "Academic Calendar",
      lastUpdated: "Feb 2024",
      description: "Complete academic year schedule and holidays",
      fileSize: "412 KB"
    },
  ]

  // Downloadable Forms
  const downloadableForms = [
    {
      name: "Admission Form",
      type: "Admission",
      size: "145 KB",
      downloads: "245"
    },
    {
      name: "Leave Application",
      type: "Leave",
      size: "98 KB",
      downloads: "512"
    },
    {
      name: "Fee Payment Receipt",
      type: "Finance",
      size: "112 KB",
      downloads: "389"
    },
    {
      name: "Transport Request",
      type: "Transport",
      size: "134 KB",
      downloads: "267"
    },
    {
      name: "Library Membership",
      type: "Library",
      size: "89 KB",
      downloads: "178"
    },
    {
      name: "Medical Form",
      type: "Medical",
      size: "156 KB",
      downloads: "324"
    },
    {
      name: "Scholarship Application",
      type: "Scholarship",
      size: "201 KB",
      downloads: "189"
    },
    {
      name: "Parent Consent Form",
      type: "General",
      size: "112 KB",
      downloads: "456"
    },
  ]

  const filteredNotices = notices.filter(notice => 
    notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    notice.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    notice.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleNotice = (id: number) => {
    setExpandedNotice(expandedNotice === id ? null : id)
  }

  const handleDownload = (fileName: string) => {
    alert(`Downloading: ${fileName}`)
    // In real implementation, this would trigger file download
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
            <span className="inline-block px-4 py-2 bg-secondary/10 text-chart-1 rounded-full text-sm font-semibold mb-6">
              Academic Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Examination & <span className="text-chart-1">Academics</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Access examination schedules, fee information, notices, and academic resources
            </p>
            <div className="w-24 h-1 bg-chart-1 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 md:gap-4">
              {[
                { id: "exams", label: "Examination Schedule", icon: Calendar },
                { id: "ptm", label: "PTM Schedule", icon: Users },
                { id: "fees", label: "Fee Payment", icon: CreditCard },
                { id: "notices", label: "Notices", icon: Bell },
                { id: "policies", label: "School Policies", icon: BookOpen },
                { id: "forms", label: "Download Forms", icon: Download },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-chart-1 text-chart-1-foreground shadow'
                      : 'bg-card text-foreground border border-border hover:bg-muted'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Examination Schedule Tab */}
            {activeTab === "exams" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Examination Schedule 2024-25
                    </h2>
                    <p className="text-muted-foreground">
                      Important dates and schedules for all examinations
                    </p>
                  </div>
                  <button className="px-6 py-3 bg-chart-1 text-chart-1-foreground font-bold rounded-lg hover:bg-chart-1/90 transition-colors duration-300 flex items-center gap-2">
                    <Printer className="w-5 h-5" />
                    Print Schedule
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {examSchedules.map((exam, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`px-3 py-1 rounded-full text-xs font-medium ${exam.color}`}>
                              {exam.status}
                            </div>
                            <span className="text-sm text-muted-foreground">{exam.classes}</span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-2">{exam.term}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{exam.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 text-muted-foreground hover:text-foreground">
                            <Bookmark className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-muted-foreground hover:text-foreground">
                            <Share2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-chart-1/5 to-chart-2/5 rounded-2xl p-6 md:p-8 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-chart-1" />
                    Important Examination Guidelines
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Students must carry their school ID card during all examinations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Report to examination hall 30 minutes before the scheduled time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Electronic devices are strictly prohibited in examination halls</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Medical certificates must be submitted for any absence during exams</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* PTM Schedule Tab */}
            {activeTab === "ptm" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Parent-Teacher Meeting Schedule
                    </h2>
                    <p className="text-muted-foreground">
                      Schedule for parent-teacher interactions and progress discussions
                    </p>
                  </div>
                  <button className="px-6 py-3 bg-chart-1 text-chart-1-foreground font-bold rounded-lg hover:bg-chart-1/90 transition-colors duration-300 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {ptmSchedules.map((ptm, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 bg-chart-1/10 text-chart-1 rounded-full text-xs font-medium">
                              {ptm.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-2">{ptm.classes}</h3>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span className="font-medium text-foreground">{ptm.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              <span>{ptm.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <FileText className="w-4 h-4" />
                              <span>Venue: {ptm.venue}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">Meeting Guidelines</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">For Parents:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Please arrive 10 minutes before your scheduled time</li>
                        <li>• Bring your child's latest report card</li>
                        <li>• Prepare questions in advance</li>
                        <li>• Keep discussions focused on academic progress</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Meeting Duration:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Regular PTM: 10-15 minutes per parent</li>
                        <li>• Special Meetings: 20-30 minutes as needed</li>
                        <li>• Follow-up meetings can be scheduled if required</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Fee Payment Tab */}
            {activeTab === "fees" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Fee Payment Schedule 2024-25
                    </h2>
                    <p className="text-muted-foreground">
                      Quarterly fee installments and payment information
                    </p>
                  </div>
                  <button className="px-6 py-3 bg-chart-1 text-chart-1-foreground font-bold rounded-lg hover:bg-chart-1/90 transition-colors duration-300 flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Pay Online
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Installment</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Due Date</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Amount</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Status</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Late Fee</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feePayments.map((fee, index) => (
                        <tr key={index} className="border-b border-border hover:bg-muted/50">
                          <td className="py-4 px-4">
                            <div className="font-medium text-foreground">{fee.installment}</div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span>{fee.dueDate}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 font-bold text-foreground">{fee.amount}</td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              fee.status === 'Paid' ? 'bg-green-500/10 text-green-500' :
                              fee.status === 'Due' ? 'bg-red-500/10 text-red-500' :
                              fee.status === 'Monthly' ? 'bg-blue-500/10 text-blue-500' :
                              'bg-yellow-500/10 text-yellow-500'
                            }`}>
                              {fee.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-sm text-muted-foreground">{fee.lateFee}</td>
                          <td className="py-4 px-4">
                            <button className="px-4 py-2 bg-chart-1 text-chart-1-foreground text-sm font-medium rounded-lg hover:bg-chart-1/90 transition-colors">
                              Pay Now
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-chart-1/5 to-chart-2/5 rounded-2xl p-6 border border-border">
                    <h3 className="font-bold text-foreground mb-3">Payment Methods</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Online Payment (Credit/Debit Card)</li>
                      <li>• Net Banking</li>
                      <li>• UPI</li>
                      <li>• Cash at School Counter</li>
                      <li>• Cheque/DD in favor of school</li>
                    </ul>
                  </div>
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-bold text-foreground mb-3">Payment Timings</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• School Office: 9 AM - 3 PM (Mon-Fri)</li>
                      <li>• Online: 24/7</li>
                      <li>• Last date for each quarter: 10th of month</li>
                    </ul>
                  </div>
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-bold text-foreground mb-3">Contact for Queries</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span>Accounts Office: +91 11 2653 6792</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>accounts@florescent.edu.in</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Notices Tab */}
            {activeTab === "notices" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      School Notices & Announcements
                    </h2>
                    <p className="text-muted-foreground">
                      Latest updates, announcements, and important information
                    </p>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search notices..."
                      className="w-full md:w-64 bg-card border border-border rounded-xl pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-chart-1"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredNotices.map((notice) => (
                    <div
                      key={notice.id}
                      className="bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      <div 
                        className="p-6 cursor-pointer"
                        onClick={() => toggleNotice(notice.id)}
                      >
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                notice.priority === 'Urgent' ? 'bg-red-500/10 text-red-500' :
                                notice.priority === 'Important' ? 'bg-yellow-500/10 text-yellow-500' :
                                'bg-green-500/10 text-green-500'
                              }`}>
                                {notice.priority}
                              </span>
                              <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                                {notice.category}
                              </span>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                <span>{notice.date}</span>
                              </div>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">{notice.title}</h3>
                            <p className="text-muted-foreground line-clamp-2">
                              {expandedNotice === notice.id ? notice.content : notice.content.substring(0, 150) + '...'}
                            </p>
                          </div>
                          <button className="text-muted-foreground hover:text-foreground">
                            {expandedNotice === notice.id ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {expandedNotice === notice.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-6 pb-6 pt-0"
                        >
                          <div className="pt-6 border-t border-border">
                            {notice.attachments.length > 0 && (
                              <div className="mb-4">
                                <h4 className="font-semibold text-foreground mb-2">Attachments:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {notice.attachments.map((file, idx) => (
                                    <button
                                      key={idx}
                                      onClick={() => handleDownload(file)}
                                      className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                                    >
                                      <FileText className="w-4 h-4" />
                                      <span className="text-sm">{file}</span>
                                      <Download className="w-4 h-4" />
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                            <div className="flex gap-3">
                              <button className="flex items-center gap-2 px-4 py-2 bg-chart-1 text-chart-1-foreground rounded-lg hover:bg-chart-1/90 transition-colors">
                                <Eye className="w-4 h-4" />
                                Mark as Read
                              </button>
                              <button className="flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors">
                                <Share2 className="w-4 h-4" />
                                Share
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* School Policies Tab */}
            {activeTab === "policies" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      School Policies & Guidelines
                    </h2>
                    <p className="text-muted-foreground">
                      Official policies, rules, and guidelines for students and parents
                    </p>
                  </div>
                  <button className="px-6 py-3 bg-chart-1 text-chart-1-foreground font-bold rounded-lg hover:bg-chart-1/90 transition-colors duration-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Policy Handbook
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {schoolPolicies.map((policy, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="w-12 h-12 bg-chart-1/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-chart-1" />
                        </div>
                        <button className="p-2 text-muted-foreground hover:text-foreground">
                          <Bookmark className="w-5 h-5" />
                        </button>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{policy.category}</h3>
                      <p className="text-muted-foreground mb-4">{policy.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          Updated: {policy.lastUpdated} • {policy.fileSize}
                        </div>
                        <button 
                          onClick={() => handleDownload(`${policy.category}.pdf`)}
                          className="flex items-center gap-2 px-4 py-2 bg-chart-1 text-chart-1-foreground text-sm font-medium rounded-lg hover:bg-chart-1/90 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Download Forms Tab */}
            {activeTab === "forms" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Downloadable Forms
                    </h2>
                    <p className="text-muted-foreground">
                      Download and submit required forms for various school activities
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors flex items-center gap-2">
                      <Filter className="w-4 h-4" />
                      Filter
                    </button>
                    <button className="px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors">
                      View All
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Form Name</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Type</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">File Size</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Downloads</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {downloadableForms.map((form, index) => (
                        <tr key={index} className="border-b border-border hover:bg-muted/50">
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-chart-1/10 rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-chart-1" />
                              </div>
                              <div>
                                <div className="font-medium text-foreground">{form.name}</div>
                                <div className="text-sm text-muted-foreground">PDF Document</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                              {form.type}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-muted-foreground">{form.size}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <Download className="w-4 h-4 text-muted-foreground" />
                              <span className="font-medium text-foreground">{form.downloads}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex gap-2">
                              <button 
                                onClick={() => handleDownload(`${form.name}.pdf`)}
                                className="px-4 py-2 bg-chart-1 text-chart-1-foreground text-sm font-medium rounded-lg hover:bg-chart-1/90 transition-colors"
                              >
                                Download
                              </button>
                              <button className="p-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-gradient-to-r from-chart-1/5 to-chart-2/5 rounded-2xl p-6 md:p-8 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">Form Submission Guidelines</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Submission Methods:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Submit printed forms at school office</li>
                        <li>• Email scanned copies to office@florescent.edu.in</li>
                        <li>• Upload through parent portal</li>
                        <li>• Courier to school address</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Important Notes:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Fill forms using black/blue ink only</li>
                        <li>• Attach required documents</li>
                        <li>• Submit before deadlines</li>
                        <li>• Keep copies for your records</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Active Notices", value: "24", icon: Bell },
                { label: "Upcoming Exams", value: "8", icon: Calendar },
                { label: "Forms Available", value: "32", icon: FileText },
                { label: "Policy Updates", value: "6", icon: BookOpen },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 text-center border border-border"
                >
                  <div className="w-12 h-12 bg-chart-1/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <stat.icon className="w-6 h-6 text-chart-1" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-chart-1/5 to-chart-2/5 rounded-2xl p-8 md:p-12 border border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Need Help with Academics?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our academic support team is here to assist you with any questions regarding examinations, fees, or school policies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-chart-1 text-chart-1-foreground font-bold rounded-lg hover:bg-chart-1/90 transition-colors duration-300">
                  Contact Support
                </button>
                <button className="px-8 py-3 border-2 border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors duration-300">
                  Download Academic Calendar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}