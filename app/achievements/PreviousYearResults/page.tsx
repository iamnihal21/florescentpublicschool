"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { 
  BarChart3, TrendingUp, TrendingDown, Target,
  Filter, Search, Download, Printer,
  Calendar, Users, Award, Star,
  ChevronDown, ChevronUp, BookOpen,
  GraduationCap, CheckCircle, Eye,
  Share2, FilterX, BarChart
} from "lucide-react"

export default function ResultsPage() {
  const [activeYear, setActiveYear] = useState("2024")
  const [activeClass, setActiveClass] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedSection, setExpandedSection] = useState<string | null>("summary")
  const [selectedStream, setSelectedStream] = useState("all")

  const years = ["2024", "2023", "2022", "2021", "2020"]
  
  const classes = [
    { id: "all", label: "All Classes", count: 12 },
    { id: "10", label: "Grade 10", count: 156 },
    { id: "12", label: "Grade 12", count: 142 },
    { id: "9", label: "Grade 9", count: 160 },
    { id: "11", label: "Grade 11", count: 148 },
    { id: "primary", label: "Primary (1-5)", count: 320 },
  ]

  const streams = [
    { id: "all", label: "All Streams", count: 456 },
    { id: "science", label: "Science", count: 158 },
    { id: "commerce", label: "Commerce", count: 142 },
    { id: "arts", label: "Arts", count: 156 },
  ]

  // Year-wise performance summary
  const yearPerformance = [
    {
      year: "2024",
      overallPass: "100%",
      distinction: "78%",
      average: "92.4%",
      toppers: "24",
      trend: "up"
    },
    {
      year: "2023",
      overallPass: "99.8%",
      distinction: "75%",
      average: "91.8%",
      toppers: "22",
      trend: "up"
    },
    {
      year: "2022",
      overallPass: "99.5%",
      distinction: "72%",
      average: "90.5%",
      toppers: "20",
      trend: "up"
    },
    {
      year: "2021",
      overallPass: "99.2%",
      distinction: "70%",
      average: "89.8%",
      toppers: "18",
      trend: "up"
    },
    {
      year: "2020",
      overallPass: "98.8%",
      distinction: "68%",
      average: "88.6%",
      toppers: "16",
      trend: "up"
    },
  ]

  // Board Exam Results
  const boardResults = [
    {
      year: "2024",
      class: "10",
      totalStudents: 156,
      passed: 156,
      passPercentage: "100%",
      distinction: "78%",
      topper: "Priya Sharma - 99.8%",
      avgPercentage: "92.4%"
    },
    {
      year: "2024",
      class: "12",
      totalStudents: 142,
      passed: 142,
      passPercentage: "100%",
      distinction: "82%",
      topper: "Rahul Verma - 98.6%",
      avgPercentage: "91.8%"
    },
    {
      year: "2023",
      class: "10",
      totalStudents: 152,
      passed: 152,
      passPercentage: "100%",
      distinction: "75%",
      topper: "Amit Kumar - 99.2%",
      avgPercentage: "91.2%"
    },
    {
      year: "2023",
      class: "12",
      totalStudents: 138,
      passed: 137,
      passPercentage: "99.3%",
      distinction: "78%",
      topper: "Neha Gupta - 97.8%",
      avgPercentage: "90.5%"
    },
    {
      year: "2022",
      class: "10",
      totalStudents: 148,
      passed: 148,
      passPercentage: "100%",
      distinction: "72%",
      topper: "Vikram Singh - 98.5%",
      avgPercentage: "90.1%"
    },
    {
      year: "2022",
      class: "12",
      totalStudents: 135,
      passed: 134,
      passPercentage: "99.3%",
      distinction: "74%",
      topper: "Ananya Reddy - 97.2%",
      avgPercentage: "89.8%"
    },
  ]

  // Subject-wise Performance
  const subjectPerformance = [
    {
      subject: "Mathematics",
      avgScore: "94.2%",
      distinction: "85%",
      topScore: "100%",
      improvement: "+2.4%"
    },
    {
      subject: "Science",
      avgScore: "92.8%",
      distinction: "82%",
      topScore: "100%",
      improvement: "+1.8%"
    },
    {
      subject: "English",
      avgScore: "91.5%",
      distinction: "78%",
      topScore: "99%",
      improvement: "+1.2%"
    },
    {
      subject: "Social Science",
      avgScore: "90.2%",
      distinction: "75%",
      topScore: "98%",
      improvement: "+0.8%"
    },
    {
      subject: "Computer Science",
      avgScore: "95.1%",
      distinction: "88%",
      topScore: "100%",
      improvement: "+3.2%"
    },
  ]

  // Top Performers
  const topPerformers = [
    {
      rank: 1,
      name: "Priya Sharma",
      class: "10",
      percentage: "99.8%",
      stream: "All Subjects",
      achievement: "School Topper",
      marks: "499/500"
    },
    {
      rank: 2,
      name: "Rahul Verma",
      class: "12",
      percentage: "98.6%",
      stream: "Science (PCM)",
      achievement: "Science Topper",
      marks: "493/500"
    },
    {
      rank: 3,
      name: "Amit Kumar",
      class: "12",
      percentage: "98.2%",
      stream: "Commerce",
      achievement: "Commerce Topper",
      marks: "491/500"
    },
    {
      rank: 4,
      name: "Neha Gupta",
      class: "12",
      percentage: "97.8%",
      stream: "Arts",
      achievement: "Arts Topper",
      marks: "489/500"
    },
    {
      rank: 5,
      name: "Vikram Singh",
      class: "10",
      percentage: "97.5%",
      stream: "All Subjects",
      achievement: "Perfect Math Score",
      marks: "488/500"
    },
  ]

  // Stream-wise Analysis
  const streamAnalysis = [
    {
      stream: "Science",
      totalStudents: 158,
      avgPercentage: "91.8%",
      distinction: "82%",
      topScore: "98.6%",
      collegeAdmissions: "95%"
    },
    {
      stream: "Commerce",
      totalStudents: 142,
      avgPercentage: "90.2%",
      distinction: "78%",
      topScore: "98.2%",
      collegeAdmissions: "92%"
    },
    {
      stream: "Arts",
      totalStudents: 156,
      avgPercentage: "89.5%",
      distinction: "75%",
      topScore: "97.8%",
      collegeAdmissions: "88%"
    },
  ]

  // Comparative Analysis
  const comparativeAnalysis = [
    { year: "2020", schoolAvg: "88.6%", nationalAvg: "85.2%" },
    { year: "2021", schoolAvg: "89.8%", nationalAvg: "86.1%" },
    { year: "2022", schoolAvg: "90.5%", nationalAvg: "86.8%" },
    { year: "2023", schoolAvg: "91.8%", nationalAvg: "87.5%" },
    { year: "2024", schoolAvg: "92.4%", nationalAvg: "88.2%" },
  ]

  // Result Trends
  const resultTrends = [
    { parameter: "Overall Pass Percentage", trend: "Consistent 100%" },
    { parameter: "Distinction Rate", trend: "Steady increase from 68% to 78%" },
    { parameter: "Average Percentage", trend: "Growth from 88.6% to 92.4%" },
    { parameter: "100% Scorers", trend: "Increased from 8 to 24 students" },
    { parameter: "College Admissions", trend: "95% admission rate in top colleges" },
  ]

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const handleDownloadResult = (year: string, className: string) => {
    alert(`Downloading results for ${year} - Class ${className}`)
  }

  const handleViewDetails = (studentName: string) => {
    alert(`Viewing detailed result for ${studentName}`)
  }

  const filteredBoardResults = boardResults.filter(result => {
    const matchesYear = activeYear === "all" || result.year === activeYear
    const matchesClass = activeClass === "all" || result.class === activeClass
    return matchesYear && matchesClass
  })

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
              Academic Performance
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Previous Year <span className="text-chart-1">Results</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Comprehensive analysis of academic performance, trends, and achievements
            </p>
            <div className="w-24 h-1 bg-chart-1 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search results by year, class, or student..."
                    className="w-full bg-card border border-border rounded-xl pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-chart-1"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors flex items-center gap-2">
                  <Printer className="w-4 h-4" />
                  Print
                </button>
                <button className="px-4 py-2 bg-chart-1 text-chart-1-foreground font-bold rounded-lg hover:bg-chart-1/90 transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export Data
                </button>
              </div>
            </div>

            {/* Year Filter */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-foreground mb-2">Select Year</h3>
              <div className="flex flex-wrap gap-2">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeYear === year
                        ? 'bg-chart-1 text-chart-1-foreground'
                        : 'bg-card text-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Class & Stream Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">Select Class</h3>
                <div className="flex flex-wrap gap-2">
                  {classes.map((cls) => (
                    <button
                      key={cls.id}
                      onClick={() => setActiveClass(cls.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                        activeClass === cls.id
                          ? 'bg-chart-1 text-chart-1-foreground'
                          : 'bg-card text-foreground border border-border hover:bg-muted'
                      }`}
                    >
                      {cls.label}
                      <span className="text-xs px-1.5 py-0.5 rounded bg-chart-1-foreground/20">
                        {cls.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">Select Stream</h3>
                <div className="flex flex-wrap gap-2">
                  {streams.map((stream) => (
                    <button
                      key={stream.id}
                      onClick={() => setSelectedStream(stream.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                        selectedStream === stream.id
                          ? 'bg-chart-1 text-chart-1-foreground'
                          : 'bg-card text-foreground border border-border hover:bg-muted'
                      }`}
                    >
                      {stream.label}
                      <span className="text-xs px-1.5 py-0.5 rounded bg-chart-1-foreground/20">
                        {stream.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Performance Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div 
                className="bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => toggleSection("summary")}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-chart-1/10 rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-chart-1" />
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                          Performance Summary - {activeYear}
                        </h2>
                        <p className="text-muted-foreground">Year-wise performance overview</p>
                      </div>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground">
                      {expandedSection === "summary" ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {expandedSection === "summary" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 pt-0"
                  >
                    <div className="pt-6 border-t border-border">
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                        {yearPerformance
                          .filter(item => item.year === activeYear)
                          .map((item, index) => (
                            <div key={index} className="space-y-4">
                              {[
                                { label: "Overall Pass", value: item.overallPass, icon: CheckCircle },
                                { label: "Distinction", value: item.distinction, icon: Star },
                                { label: "Average", value: item.average, icon: Target },
                                { label: "Toppers", value: item.toppers, icon: Award },
                                { label: "Trend", value: item.trend === "up" ? "↗ Improving" : "↘ Declining", icon: item.trend === "up" ? TrendingUp : TrendingDown },
                              ].map((stat, idx) => (
                                <div key={idx} className="bg-background rounded-xl p-4 text-center">
                                  <div className="w-8 h-8 bg-chart-1/10 rounded-lg flex items-center justify-center mb-2 mx-auto">
                                    <stat.icon className="w-4 h-4 text-chart-1" />
                                  </div>
                                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                                </div>
                              ))}
                            </div>
                          ))}
                      </div>

                      <div className="bg-muted rounded-xl p-4">
                        <h3 className="font-bold text-foreground mb-3">Key Highlights</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">100% pass rate maintained for 5 consecutive years</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">24 students achieved school topper status</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">Average percentage improved by 3.8% over 5 years</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Board Exam Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div 
                className="bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => toggleSection("board")}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-chart-1/10 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-chart-1" />
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                          Board Exam Results
                        </h2>
                        <p className="text-muted-foreground">Detailed class-wise performance</p>
                      </div>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground">
                      {expandedSection === "board" ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {expandedSection === "board" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 pt-0"
                  >
                    <div className="pt-6 border-t border-border">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-4 px-4 font-semibold text-foreground">Year</th>
                              <th className="text-left py-4 px-4 font-semibold text-foreground">Class</th>
                              <th className="text-left py-4 px-4 font-semibold text-foreground">Students</th>
                              <th className="text-left py-4 px-4 font-semibold text-foreground">Pass %</th>
                              <th className="text-left py-4 px-4 font-semibold text-foreground">Distinction</th>
                              <th className="text-left py-4 px-4 font-semibold text-foreground">Average %</th>
                              <th className="text-left py-4 px-4 font-semibold text-foreground">Topper</th>
                              <th className="text-left py-4 px-4 font-semibold text-foreground">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredBoardResults.map((result, index) => (
                              <tr key={index} className="border-b border-border hover:bg-muted/50">
                                <td className="py-4 px-4">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-muted-foreground" />
                                    <span className="font-medium">{result.year}</span>
                                  </div>
                                </td>
                                <td className="py-4 px-4">
                                  <div className="flex items-center gap-2">
                                    <GraduationCap className="w-4 h-4 text-muted-foreground" />
                                    <span>Grade {result.class}</span>
                                  </div>
                                </td>
                                <td className="py-4 px-4">
                                  <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-muted-foreground" />
                                    <span>{result.totalStudents}</span>
                                  </div>
                                </td>
                                <td className="py-4 px-4">
                                  <div className="font-bold text-green-500">{result.passPercentage}</div>
                                </td>
                                <td className="py-4 px-4">
                                  <div className="font-medium text-foreground">{result.distinction}</div>
                                </td>
                                <td className="py-4 px-4">
                                  <div className="font-bold text-chart-1">{result.avgPercentage}</div>
                                </td>
                                <td className="py-4 px-4">
                                  <div className="text-sm text-muted-foreground">{result.topper}</div>
                                </td>
                                <td className="py-4 px-4">
                                  <div className="flex gap-2">
                                    <button
                                      onClick={() => handleDownloadResult(result.year, result.class)}
                                      className="px-3 py-1.5 bg-chart-1 text-chart-1-foreground text-sm font-medium rounded-lg hover:bg-chart-1/90 transition-colors flex items-center gap-1"
                                    >
                                      <Download className="w-3 h-3" />
                                      PDF
                                    </button>
                                    <button className="p-1.5 border border-border rounded-lg hover:bg-muted">
                                      <Eye className="w-4 h-4" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Top Performers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <div 
                className="bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => toggleSection("toppers")}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-chart-1/10 rounded-xl flex items-center justify-center">
                        <Award className="w-5 h-5 text-chart-1" />
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                          Top Performers - {activeYear}
                        </h2>
                        <p className="text-muted-foreground">Students with outstanding achievements</p>
                      </div>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground">
                      {expandedSection === "toppers" ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {expandedSection === "toppers" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 pt-0"
                  >
                    <div className="pt-6 border-t border-border">
                      <div className="space-y-4">
                        {topPerformers.map((student, index) => (
                          <div
                            key={index}
                            className="bg-background rounded-xl p-4 border border-border hover:shadow transition-all duration-300"
                          >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-chart-1/10 rounded-xl flex items-center justify-center">
                                  <div className="text-xl font-bold text-chart-1">{student.rank}</div>
                                </div>
                                <div>
                                  <h3 className="font-bold text-foreground">{student.name}</h3>
                                  <div className="flex flex-wrap gap-2 mt-1">
                                    <span className="text-sm text-muted-foreground">Grade {student.class}</span>
                                    <span className="text-sm text-muted-foreground">•</span>
                                    <span className="text-sm text-muted-foreground">{student.stream}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="text-right">
                                <div className="text-2xl font-bold text-chart-1 mb-1">{student.percentage}</div>
                                <div className="text-sm text-muted-foreground">{student.marks}</div>
                              </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-border">
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-2">
                                  <Star className="w-4 h-4 text-yellow-500" />
                                  <span className="text-sm font-medium text-foreground">{student.achievement}</span>
                                </div>
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => handleViewDetails(student.name)}
                                    className="px-3 py-1.5 border border-border text-foreground text-sm rounded-lg hover:bg-muted transition-colors"
                                  >
                                    View Result
                                  </button>
                                  <button className="p-1.5 border border-border rounded-lg hover:bg-muted">
                                    <Share2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Subject-wise Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <div 
                className="bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => toggleSection("subjects")}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-chart-1/10 rounded-xl flex items-center justify-center">
                        <Target className="w-5 h-5 text-chart-1" />
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                          Subject-wise Performance
                        </h2>
                        <p className="text-muted-foreground">Detailed analysis by subject</p>
                      </div>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground">
                      {expandedSection === "subjects" ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {expandedSection === "subjects" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 pt-0"
                  >
                    <div className="pt-6 border-t border-border">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subjectPerformance.map((subject, index) => (
                          <div
                            key={index}
                            className="bg-background rounded-xl p-4 border border-border"
                          >
                            <h3 className="font-bold text-foreground mb-4">{subject.subject}</h3>
                            
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Average Score</span>
                                <span className="font-bold text-foreground">{subject.avgScore}</span>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Distinction %</span>
                                <span className="font-medium text-green-500">{subject.distinction}</span>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Top Score</span>
                                <span className="font-medium text-chart-1">{subject.topScore}</span>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Improvement</span>
                                <span className="font-medium text-green-500">{subject.improvement}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Stream Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-8"
            >
              <div 
                className="bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => toggleSection("streams")}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-chart-1/10 rounded-xl flex items-center justify-center">
                        <BarChart className="w-5 h-5 text-chart-1" />
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                          Stream-wise Analysis
                        </h2>
                        <p className="text-muted-foreground">Performance comparison across streams</p>
                      </div>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground">
                      {expandedSection === "streams" ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {expandedSection === "streams" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 pt-0"
                  >
                    <div className="pt-6 border-t border-border">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {streamAnalysis.map((stream, index) => (
                          <div
                            key={index}
                            className="bg-background rounded-xl p-4 border border-border hover:shadow transition-all duration-300"
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                stream.stream === "Science" ? "bg-blue-500/10" :
                                stream.stream === "Commerce" ? "bg-green-500/10" :
                                "bg-purple-500/10"
                              }`}>
                                <GraduationCap className={`w-5 h-5 ${
                                  stream.stream === "Science" ? "text-blue-500" :
                                  stream.stream === "Commerce" ? "text-green-500" :
                                  "text-purple-500"
                                }`} />
                              </div>
                              <div>
                                <h3 className="font-bold text-foreground">{stream.stream}</h3>
                                <div className="text-sm text-muted-foreground">{stream.totalStudents} Students</div>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Avg Percentage</span>
                                <span className="font-bold text-foreground">{stream.avgPercentage}</span>
                              </div>
                              
                              <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Distinction</span>
                                <span className="font-medium text-green-500">{stream.distinction}</span>
                              </div>
                              
                              <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Top Score</span>
                                <span className="font-medium text-chart-1">{stream.topScore}</span>
                              </div>
                              
                              <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">College Admissions</span>
                                <span className="font-medium text-green-500">{stream.collegeAdmissions}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Comparative Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mb-8"
            >
              <div 
                className="bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => toggleSection("comparative")}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-chart-1/10 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-chart-1" />
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                          Comparative Analysis
                        </h2>
                        <p className="text-muted-foreground">School vs National averages</p>
                      </div>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground">
                      {expandedSection === "comparative" ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {expandedSection === "comparative" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 pt-0"
                  >
                    <div className="pt-6 border-t border-border">
                      <div className="bg-background rounded-xl p-6">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Year</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">School Average</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">National Average</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Difference</th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">Performance</th>
                              </tr>
                            </thead>
                            <tbody>
                              {comparativeAnalysis.map((data, index) => {
                                const schoolAvg = parseFloat(data.schoolAvg)
                                const nationalAvg = parseFloat(data.nationalAvg)
                                const difference = schoolAvg - nationalAvg
                                const isPositive = difference >= 0
                                
                                return (
                                  <tr key={index} className="border-b border-border hover:bg-muted/50">
                                    <td className="py-3 px-4 font-medium">{data.year}</td>
                                    <td className="py-3 px-4 font-bold text-chart-1">{data.schoolAvg}</td>
                                    <td className="py-3 px-4 text-muted-foreground">{data.nationalAvg}</td>
                                    <td className="py-3 px-4">
                                      <span className={`font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                                        {isPositive ? '+' : ''}{difference.toFixed(1)}%
                                      </span>
                                    </td>
                                    <td className="py-3 px-4">
                                      <div className="flex items-center gap-2">
                                        {isPositive ? (
                                          <TrendingUp className="w-4 h-4 text-green-500" />
                                        ) : (
                                          <TrendingDown className="w-4 h-4 text-red-500" />
                                        )}
                                        <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
                                          {isPositive ? 'Above' : 'Below'} National Average
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Result Trends */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="bg-gradient-to-r from-chart-1/5 to-chart-2/5 rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Key Result Trends</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {resultTrends.map((trend, index) => (
                    <div
                      key={index}
                      className="bg-background rounded-xl p-4 border border-border"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-chart-1/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="w-4 h-4 text-chart-1" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{trend.parameter}</h3>
                          <p className="text-sm text-muted-foreground">{trend.trend}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-chart-1/5 to-chart-2/5 rounded-2xl p-8 md:p-12 border border-border">
              <div className="w-16 h-16 bg-chart-1/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Download className="w-8 h-8 text-chart-1" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Download Complete Results
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Access detailed result reports, analytics, and year-wise comparison data
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-chart-1 text-chart-1-foreground font-bold rounded-lg hover:bg-chart-1/90 transition-colors duration-300 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download All Reports (PDF)
                </button>
                <button className="px-8 py-3 border-2 border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors duration-300">
                  Request Detailed Analysis
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}