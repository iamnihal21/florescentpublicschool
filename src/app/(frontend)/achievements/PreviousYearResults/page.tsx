// "use client"

// import { motion } from "framer-motion"
// import { useState } from "react"
// import { 
//   Search, Filter, ChevronLeft, ChevronRight,
//   Maximize2, Download, Share2, Calendar,
//   Award, Users, Star, Target
// } from "lucide-react"
// import Image from "next/image"

// export default function ResultsPage() {
//   const [selectedYear, setSelectedYear] = useState("2024")
//   const [selectedClass, setSelectedClass] = useState("all")
//   const [searchQuery, setSearchQuery] = useState("")
//   const [selectedImage, setSelectedImage] = useState<string | null>(null)
//   const [currentPage, setCurrentPage] = useState(1)
//   const resultsPerPage = 9

//   // Available years
//   const years = ["2024", "2023", "2022", "2021", "2020"]

//   // Available classes
//   const classes = [
//     { id: "all", label: "All Classes", count: 45 },
//     { id: "10", label: "Grade 10", count: 9 },
//     { id: "12", label: "Grade 12", count: 9 },
//     { id: "9", label: "Grade 9", count: 9 },
//     { id: "11", label: "Grade 11", count: 9 },
//     { id: "primary", label: "Primary", count: 9 },
//   ]

//   // Sample result images data
//   const resultImages = [
//     { id: 1, year: "2024", class: "10", title: "Class 10 Toppers", date: "May 15, 2024", likes: 124, type: "toppers" },
//     { id: 2, year: "2024", class: "12", title: "Science Stream Results", date: "May 18, 2024", likes: 98, type: "stream" },
//     { id: 3, year: "2024", class: "9", title: "Annual Exam Results", date: "Mar 20, 2024", likes: 156, type: "annual" },
//     { id: 4, year: "2024", class: "11", title: "Commerce Toppers", date: "May 16, 2024", likes: 87, type: "toppers" },
//     { id: 5, year: "2023", class: "10", title: "2023 Board Results", date: "May 25, 2023", likes: 203, type: "board" },
//     { id: 6, year: "2023", class: "12", title: "Science Achievers", date: "May 22, 2023", likes: 165, type: "achievers" },
//     { id: 7, year: "2023", class: "12", title: "Arts Stream Results", date: "May 28, 2023", likes: 92, type: "stream" },
//     { id: 8, year: "2023", class: "11", title: "Pre-Board Results", date: "Jan 15, 2023", likes: 134, type: "preboard" },
//     { id: 9, year: "2022", class: "10", title: "2022 Toppers", date: "May 30, 2022", likes: 187, type: "toppers" },
//     { id: 10, year: "2022", class: "12", title: "Science Results", date: "May 27, 2022", likes: 145, type: "stream" },
//     { id: 11, year: "2022", class: "12", title: "Commerce Results", date: "May 29, 2022", likes: 121, type: "stream" },
//     { id: 12, year: "2022", class: "9", title: "Annual Results", date: "Mar 25, 2022", likes: 113, type: "annual" },
//     { id: 13, year: "2021", class: "10", title: "2021 Achievers", date: "May 20, 2021", likes: 178, type: "achievers" },
//     { id: 14, year: "2021", class: "12", title: "Science Toppers", date: "May 24, 2021", likes: 156, type: "toppers" },
//     { id: 15, year: "2021", class: "11", title: "Unit Test Results", date: "Sep 10, 2021", likes: 89, type: "test" },
//     { id: 16, year: "2020", class: "10", title: "2020 Results", date: "May 18, 2020", likes: 165, type: "board" },
//     { id: 17, year: "2020", class: "12", title: "Science Stream", date: "May 22, 2020", likes: 134, type: "stream" },
//     { id: 18, year: "2020", class: "12", title: "Commerce Stream", date: "May 25, 2020", likes: 118, type: "stream" },
//   ]

//   // Filter images based on selected year and class
//   const filteredImages = resultImages.filter(image => {
//     const matchesYear = selectedYear === "all" || image.year === selectedYear
//     const matchesClass = selectedClass === "all" || image.class === selectedClass
//     const matchesSearch = searchQuery === "" || 
//       image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       image.type.toLowerCase().includes(searchQuery.toLowerCase())
    
//     return matchesYear && matchesClass && matchesSearch
//   })

//   // Pagination
//   const totalPages = Math.ceil(filteredImages.length / resultsPerPage)
//   const startIndex = (currentPage - 1) * resultsPerPage
//   const endIndex = startIndex + resultsPerPage
//   const currentImages = filteredImages.slice(startIndex, endIndex)

//   const handleYearChange = (year: string) => {
//     setSelectedYear(year)
//     setCurrentPage(1)
//   }

//   const handleClassChange = (classId: string) => {
//     setSelectedClass(classId)
//     setCurrentPage(1)
//   }

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1)
//     }
//   }

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1)
//     }
//   }

//   const handleDownload = (imageId: number) => {
//     alert(`Downloading image ${imageId}`)
//   }

//   const handleShare = (imageId: number) => {
//     alert(`Sharing image ${imageId}`)
//   }

//   const openLightbox = (imageId: number) => {
//     setSelectedImage(`/results/${imageId}.jpg`)
//   }

//   const closeLightbox = () => {
//     setSelectedImage(null)
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <section className="relative py-16 md:py-24 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5"></div>
        
//         <motion.div
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             repeatType: "reverse"
//           }}
//           className="absolute top-10 right-10 w-64 h-64 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-3xl"
//         />

//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <span className="inline-block px-4 py-2 bg-secondary/10 text-chart-1 rounded-full text-sm font-semibold mb-6">
//               Results Gallery
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
//               Academic <span className="text-chart-1">Results</span>
//             </h1>
//             <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
//               Browse through our collection of academic results and achievements
//             </p>
//             <div className="w-24 h-1 bg-chart-1 mx-auto"></div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Filters Section */}
//       <section className="py-8 border-b border-border">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             {/* Search Bar */}
//             <div className="mb-6">
//               <div className="relative max-w-2xl mx-auto">
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => {
//                     setSearchQuery(e.target.value)
//                     setCurrentPage(1)
//                   }}
//                   placeholder="Search results by title, year, or type..."
//                   className="w-full bg-card border border-border rounded-xl pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-chart-1"
//                 />
//               </div>
//             </div>

//             {/* Year Filter */}
//             {/* <div className="mb-6">
//               <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
//                 <Calendar className="w-4 h-4" />
//                 Select Year
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {years.map((year) => (
//                   <button
//                     key={year}
//                     onClick={() => handleYearChange(year)}
//                     className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
//                       selectedYear === year
//                         ? 'bg-chart-1 text-chart-1-foreground'
//                         : 'bg-card text-foreground border border-border hover:bg-muted'
//                     }`}
//                   >
//                     {year}
//                   </button>
//                 ))}
//               </div>
//             </div> */}

//             {/* Class Filter */}
//             <div>
//               {/* <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
//                 <Users className="w-4 h-4" />
//                 Select Class
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {classes.map((cls) => (
//                   <button
//                     key={cls.id}
//                     onClick={() => handleClassChange(cls.id)}
//                     className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
//                       selectedClass === cls.id
//                         ? 'bg-chart-1 text-chart-1-foreground'
//                         : 'bg-card text-foreground border border-border hover:bg-muted'
//                     }`}
//                   >
//                     {cls.label}
//                     <span className="text-xs px-2 py-0.5 rounded-full bg-chart-1-foreground/20">
//                       {cls.count}
//                     </span>
//                   </button>
//                 ))}
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Results Gallery */}
//       <section className="py-12">
//         <div className="container mx-auto px-4">
//           {/* Results Stats */}
//           <div className="max-w-6xl mx-auto mb-8">
//             {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <div className="bg-card rounded-xl p-4 border border-border">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
//                     <Target className="w-5 h-5 text-green-500" />
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-foreground">{filteredImages.length}</div>
//                     <div className="text-sm text-muted-foreground">Result Sheets</div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-card rounded-xl p-4 border border-border">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
//                     <Calendar className="w-5 h-5 text-blue-500" />
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-foreground">{selectedYear === "all" ? "5" : "1"}</div>
//                     <div className="text-sm text-muted-foreground">Years</div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-card rounded-xl p-4 border border-border">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
//                     <Users className="w-5 h-5 text-purple-500" />
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-foreground">
//                       {selectedClass === "all" ? "6" : "1"}
//                     </div>
//                     <div className="text-sm text-muted-foreground">Classes</div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-card rounded-xl p-4 border border-border">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
//                     <Star className="w-5 h-5 text-yellow-500" />
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-foreground">18</div>
//                     <div className="text-sm text-muted-foreground">Topper Lists</div>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//           </div>

//           {/* Gallery Grid */}
//           {filteredImages.length === 0 ? (
//             <div className="max-w-6xl mx-auto text-center py-16">
//               <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Award className="w-12 h-12 text-muted-foreground" />
//               </div>
//               <h3 className="text-xl font-bold text-foreground mb-3">No Results Found</h3>
//               <p className="text-muted-foreground mb-6">
//                 Try adjusting your filters or search terms
//               </p>
//               <button
//                 onClick={() => {
//                   setSelectedYear("all")
//                   setSelectedClass("all")
//                   setSearchQuery("")
//                 }}
//                 className="px-6 py-3 bg-chart-1 text-chart-1-foreground rounded-lg font-semibold hover:bg-chart-1/90 transition-colors"
//               >
//                 Reset Filters
//               </button>
//             </div>
//           ) : (
//             <>
//               <div className="max-w-6xl mx-auto">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {currentImages.map((image) => (
//                     <motion.div
//                       key={image.id}
//                       initial={{ opacity: 0, scale: 0.95 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.4 }}
//                       className="group"
//                     >
//                       <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//                         {/* Image Container */}
//                         <div 
//                           className="relative aspect-[4/3] bg-gradient-to-br from-muted to-card cursor-pointer overflow-hidden"
//                           onClick={() => openLightbox(image.id)}
//                         >
//                           {/* Placeholder Image - In real implementation, replace with actual image */}
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <div className="text-center p-8">
//                               <div className="text-5xl mb-4 opacity-50">📊</div>
//                               <div className="space-y-2">
//                                 <div className="text-2xl font-bold text-foreground">Result Sheet</div>
//                                 <div className="text-sm text-muted-foreground">Grade {image.class} - {image.year}</div>
//                                 <div className="text-xs text-muted-foreground">Click to view full size</div>
//                               </div>
//                             </div>
//                           </div>
                          
//                           {/* Year Badge */}
//                           <div className="absolute top-4 left-4 bg-chart-1 text-chart-1-foreground px-3 py-1 rounded-full text-sm font-semibold">
//                             {image.year}
//                           </div>
                          
//                           {/* Type Badge */}
//                           <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-foreground border border-border">
//                             {image.type.toUpperCase()}
//                           </div>
                          
//                           {/* Hover Overlay */}
//                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
//                             <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                               <Maximize2 className="w-8 h-8 text-white" />
//                             </div>
//                           </div>
//                         </div>

//                         {/* Image Info */}
//                         <div className="p-5">
//                           <div className="flex items-start justify-between mb-3">
//                             <h3 className="font-bold text-foreground text-lg line-clamp-1">
//                               {image.title}
//                             </h3>
//                             <div className="flex items-center gap-1 text-yellow-500">
//                               <Star className="w-4 h-4 fill-current" />
//                               <span className="text-sm font-medium">{image.likes}</span>
//                             </div>
//                           </div>
                          
//                           <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
//                             <div className="flex items-center gap-2">
//                               <div className="flex items-center gap-1">
//                                 <Calendar className="w-3 h-3" />
//                                 <span>{image.date}</span>
//                               </div>
//                             </div>
//                             <div className="flex items-center gap-1 bg-secondary/10 px-2 py-1 rounded">
//                               <span className="text-xs font-medium">Grade {image.class}</span>
//                             </div>
//                           </div>

//                           {/* Action Buttons */}
//                           {/* <div className="flex gap-2">
//                             <button
//                               onClick={() => handleDownload(image.id)}
//                               className="flex-1 px-4 py-2 bg-chart-1 text-chart-1-foreground rounded-lg font-medium hover:bg-chart-1/90 transition-colors flex items-center justify-center gap-2"
//                             >
//                               <Download className="w-4 h-4" />
//                               Download
//                             </button>
//                             <button
//                               onClick={() => handleShare(image.id)}
//                               className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
//                             >
//                               <Share2 className="w-4 h-4" />
//                             </button>
//                           </div> */}
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Pagination */}
//               {totalPages > 1 && (
//                 <div className="max-w-6xl mx-auto mt-12">
//                   <div className="flex items-center justify-center gap-4">
//                     <button
//                       onClick={handlePrevPage}
//                       disabled={currentPage === 1}
//                       className={`p-2 rounded-lg border border-border ${
//                         currentPage === 1
//                           ? 'text-muted-foreground cursor-not-allowed'
//                           : 'text-foreground hover:bg-muted hover:border-chart-1'
//                       }`}
//                     >
//                       <ChevronLeft className="w-5 h-5" />
//                     </button>

//                     <div className="flex items-center gap-2">
//                       {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//                         let pageNum
//                         if (totalPages <= 5) {
//                           pageNum = i + 1
//                         } else if (currentPage <= 3) {
//                           pageNum = i + 1
//                         } else if (currentPage >= totalPages - 2) {
//                           pageNum = totalPages - 4 + i
//                         } else {
//                           pageNum = currentPage - 2 + i
//                         }

//                         return (
//                           <button
//                             key={pageNum}
//                             onClick={() => setCurrentPage(pageNum)}
//                             className={`w-10 h-10 rounded-lg font-medium transition-all ${
//                               currentPage === pageNum
//                                 ? 'bg-chart-1 text-chart-1-foreground'
//                                 : 'border border-border text-foreground hover:bg-muted'
//                             }`}
//                           >
//                             {pageNum}
//                           </button>
//                         )
//                       })}
//                     </div>

//                     <button
//                       onClick={handleNextPage}
//                       disabled={currentPage === totalPages}
//                       className={`p-2 rounded-lg border border-border ${
//                         currentPage === totalPages
//                           ? 'text-muted-foreground cursor-not-allowed'
//                           : 'text-foreground hover:bg-muted hover:border-chart-1'
//                       }`}
//                     >
//                       <ChevronRight className="w-5 h-5" />
//                     </button>
//                   </div>
                  
//                   <div className="text-center mt-4 text-sm text-muted-foreground">
//                     Showing {startIndex + 1}-{Math.min(endIndex, filteredImages.length)} of {filteredImages.length} results
//                   </div>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </section>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
//           <div className="relative max-w-6xl max-h-[90vh] w-full">
//             {/* Close Button */}
//             <button
//               onClick={closeLightbox}
//               className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
//             >
//               Close
//             </button>
            
//             {/* Image Container */}
//             <div className="bg-white rounded-xl overflow-hidden">
//               <div className="aspect-[4/3] relative">
//                 {/* In real implementation, replace with actual Image component */}
//                 <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-card">
//                   <div className="text-center p-8">
//                     <div className="text-7xl mb-6">📊</div>
//                     <div className="text-2xl font-bold text-foreground mb-2">Full Size Result Sheet</div>
//                     <div className="text-muted-foreground">This would display the actual result image</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Download Button in Lightbox */}
//             {/* <div className="absolute -bottom-12 left-0 right-0 flex justify-center">
//               <button
//                 onClick={() => handleDownload(1)}
//                 className="px-6 py-3 bg-chart-1 text-chart-1-foreground rounded-lg font-semibold hover:bg-chart-1/90 transition-colors flex items-center gap-2"
//               >
//                 <Download className="w-5 h-5" />
//                 Download High Quality Image
//               </button>
//             </div> */}
//           </div>
//         </div>
//       )}

//       {/* Call to Action */}
//       {/* <section className="py-12 bg-card/50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="bg-gradient-to-r from-chart-1/10 to-chart-2/10 rounded-2xl p-8 md:p-12 border border-border">
//               <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
//                 Need Official Result Certificates?
//               </h3>
//               <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
//                 Contact the school administration for official transcripts and certificates
//               </p>
//               <button className="px-8 py-3 bg-chart-1 text-chart-1-foreground rounded-lg font-semibold hover:bg-chart-1/90 transition-colors">
//                 Contact School Office
//               </button>
//             </div>
//           </div>
//         </div>
//       </section> */}
//     </div>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { payloadClient } from "@/app/(frontend)/lib/payload-client"
import { 
  Search, ChevronLeft, ChevronRight,
  Maximize2, Award, Calendar, Users,
  Target, Star, Trophy
} from "lucide-react"

export default function ResultsPage() {
  const [selectedYear, setSelectedYear] = useState("2024")
  const [selectedClass, setSelectedClass] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [totalResults, setTotalResults] = useState(0)
  const resultsPerPage = 9

  const years = ["2024", "2023", "2022", "2021", "2020"]

  const classes = [
    { id: "all", label: "All Classes", count: 0 },
    { id: "10", label: "Grade 10", count: 0 },
    { id: "12", label: "Grade 12", count: 0 },
    { id: "9", label: "Grade 9", count: 0 },
    { id: "11", label: "Grade 11", count: 0 },
    { id: "primary", label: "Primary", count: 0 },
  ]

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true)
        
        const filters: any = {}
        if (selectedYear !== "all") filters.year = selectedYear
        if (selectedClass !== "all") filters.grade = selectedClass
        
        const resultsData = await payloadClient.getAcademicResults(filters)
        
        if (resultsData.docs) {
          setResults(resultsData.docs)
          setTotalResults(resultsData.totalDocs || 0)
          
          // Update class counts
          const updatedClasses = classes.map(cls => {
            if (cls.id === "all") {
              return { ...cls, count: resultsData.totalDocs || 0 }
            }
            const count = resultsData.docs.filter(
              (result: any) => result.grade === cls.id
            ).length
            return { ...cls, count }
          })
        }
      } catch (error) {
        console.error("Error fetching results:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchResults()
  }, [selectedYear, selectedClass])

  // Filter images based on search
  const filteredResults = results.filter(result => {
    return searchQuery === "" || 
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.type.toLowerCase().includes(searchQuery.toLowerCase())
  })

  // Pagination
  const totalPages = Math.ceil(filteredResults.length / resultsPerPage)
  const startIndex = (currentPage - 1) * resultsPerPage
  const endIndex = startIndex + resultsPerPage
  const currentResults = filteredResults.slice(startIndex, endIndex)

  const handleYearChange = (year: string) => {
    setSelectedYear(year)
    setCurrentPage(1)
  }

  const handleClassChange = (classId: string) => {
    setSelectedClass(classId)
    setCurrentPage(1)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const openLightbox = (resultId: string) => {
    setSelectedImage(resultId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading results...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
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
              Results Gallery
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Academic <span className="text-secondary">Results</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Browse through our collection of academic results and achievements
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setCurrentPage(1)
                  }}
                  placeholder="Search results by title, year, or type..."
                  className="w-full bg-card border border-border rounded-xl pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>

            {/* Year Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Select Year
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleYearChange("all")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedYear === "all"
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-card text-foreground border border-border hover:bg-muted'
                  }`}
                >
                  All Years
                </button>
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => handleYearChange(year)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedYear === year
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-card text-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Class Filter */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Select Class
              </h3>
              <div className="flex flex-wrap gap-2">
                {classes.map((cls) => (
                  <button
                    key={cls.id}
                    onClick={() => handleClassChange(cls.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedClass === cls.id
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-card text-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    {cls.label}
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary-foreground/20">
                      {cls.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Results Stats */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{totalResults}</div>
                    <div className="text-sm text-muted-foreground">Result Sheets</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      {selectedYear === "all" ? years.length : "1"}
                    </div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      {selectedClass === "all" ? classes.length - 1 : "1"}
                    </div>
                    <div className="text-sm text-muted-foreground">Classes</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      {results.filter(r => r.type === 'toppers').length}
                    </div>
                    <div className="text-sm text-muted-foreground">Topper Lists</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          {filteredResults.length === 0 ? (
            <div className="max-w-6xl mx-auto text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">No Results Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={() => {
                  setSelectedYear("all")
                  setSelectedClass("all")
                  setSearchQuery("")
                }}
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentResults.map((result: any) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="group"
                    >
                      <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        {/* Image Container */}
                        <div 
                          className="relative aspect-[4/3] bg-gradient-to-br from-muted to-card cursor-pointer overflow-hidden"
                          onClick={() => openLightbox(result.id)}
                        >
                          {/* Placeholder Image - In real implementation, replace with actual image */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                              <div className="text-5xl mb-4 opacity-50">📊</div>
                              <div className="space-y-2">
                                <div className="text-2xl font-bold text-foreground">Result Sheet</div>
                                <div className="text-sm text-muted-foreground">Grade {result.grade} - {result.year}</div>
                                <div className="text-xs text-muted-foreground">Click to view full size</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Year Badge */}
                          <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                            {result.year}
                          </div>
                          
                          {/* Type Badge */}
                          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-foreground border border-border">
                            {result.type.toUpperCase()}
                          </div>
                          
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              <Maximize2 className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Result Info */}
                        <div className="p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-bold text-foreground text-lg line-clamp-1">
                              {result.title}
                            </h3>
                            <div className="flex items-center gap-1 text-yellow-500">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="text-sm font-medium">{result.likes || 0}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{formatDate(result.date)}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 bg-secondary/10 px-2 py-1 rounded">
                              <span className="text-xs font-medium">Grade {result.grade}</span>
                            </div>
                          </div>

                          {/* Top Students */}
                          {result.topStudents && result.topStudents.length > 0 && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-foreground mb-2">Top Performers:</h4>
                              <div className="space-y-1">
                                {result.topStudents.slice(0, 2).map((student: any, idx: number) => (
                                  <div key={idx} className="flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground">{student.name}</span>
                                    <span className="font-medium">{student.percentage}%</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="max-w-6xl mx-auto mt-12">
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-lg border border-border ${
                        currentPage === 1
                          ? 'text-muted-foreground cursor-not-allowed'
                          : 'text-foreground hover:bg-muted hover:border-secondary'
                      }`}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum
                        if (totalPages <= 5) {
                          pageNum = i + 1
                        } else if (currentPage <= 3) {
                          pageNum = i + 1
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i
                        } else {
                          pageNum = currentPage - 2 + i
                        }

                        return (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`w-10 h-10 rounded-lg font-medium transition-all ${
                              currentPage === pageNum
                                ? 'bg-secondary text-secondary-foreground'
                                : 'border border-border text-foreground hover:bg-muted'
                            }`}
                          >
                            {pageNum}
                          </button>
                        )
                      })}
                    </div>

                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-lg border border-border ${
                        currentPage === totalPages
                          ? 'text-muted-foreground cursor-not-allowed'
                          : 'text-foreground hover:bg-muted hover:border-secondary'
                      }`}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="text-center mt-4 text-sm text-muted-foreground">
                    Showing {startIndex + 1}-{Math.min(endIndex, filteredResults.length)} of {filteredResults.length} results
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              Close
            </button>
            
            {/* Image Container */}
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                {/* In real implementation, replace with actual Image component */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-card">
                  <div className="text-center p-8">
                    <div className="text-7xl mb-6">📊</div>
                    <div className="text-2xl font-bold text-foreground mb-2">Full Size Result Sheet</div>
                    <div className="text-muted-foreground">This would display the actual result image</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

