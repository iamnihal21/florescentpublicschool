// "use client"

// import { motion } from "framer-motion"
// import {
//   Calendar, Clock, FileText
// } from "lucide-react"

// export default function AcademicsPage() {
//   const upcomingEvents = [
//     {
//       title: "Inter-house Sports Meet",
//       date: "March 25, 2024",
//       time: "9:00 AM - 4:00 PM",
//       venue: "School Ground",
//       category: "sports",
//       participants: "All Students"
//     },
//     {
//       title: "Art Exhibition",
//       date: "April 5, 2024",
//       time: "10:00 AM - 5:00 PM",
//       venue: "Art Gallery",
//       category: "arts",
//       participants: "Art Club Members"
//     },
//     {
//       title: "Music Recital",
//       date: "April 12, 2024",
//       time: "4:00 PM - 6:00 PM",
//       venue: "Auditorium",
//       category: "music",
//       participants: "Music Students"
//     },
//     {
//       title: "Drama Production",
//       date: "April 20, 2024",
//       time: "5:00 PM - 8:00 PM",
//       venue: "Auditorium",
//       category: "drama",
//       participants: "Drama Club"
//     },
//   ]

//   // Examination Schedule Data
//   const examSchedules = [
//     {
//       term: "Term I - Annual Examination",
//       date: "March 15-30, 2024",
//       classes: "Nursery - Grade 12",
//       status: "Upcoming",
//       color: "bg-red-500/10 text-red-500"
//     },
//     {
//       term: "Term II - Half Yearly",
//       date: "October 10-25, 2024",
//       classes: "Grade 1-12",
//       status: "Upcoming",
//       color: "bg-blue-500/10 text-blue-500"
//     },
//     {
//       term: "Unit Test I",
//       date: "April 5-10, 2024",
//       classes: "All Classes",
//       status: "Completed",
//       color: "bg-green-500/10 text-green-500"
//     },
//     {
//       term: "Practical Examinations",
//       date: "March 5-12, 2024",
//       classes: "Grade 9-12",
//       status: "Ongoing",
//       color: "bg-yellow-500/10 text-yellow-500"
//     },
//     {
//       term: "Pre-Board Exams",
//       date: "January 15-30, 2024",
//       classes: "Grade 10 & 12",
//       status: "Completed",
//       color: "bg-green-500/10 text-green-500"
//     },
//     {
//       term: "Term III - Final Exams",
//       date: "February 1-15, 2025",
//       classes: "All Classes",
//       status: "Upcoming",
//       color: "bg-red-500/10 text-red-500"
//     },
//   ]

//   // PTM Schedule Data
//   const ptmSchedules = [
//     {
//       date: "March 20, 2024",
//       time: "9:00 AM - 1:00 PM",
//       classes: "Nursery - Grade 5",
//       venue: "School Auditorium",
//       type: "Regular PTM"
//     },
//     {
//       date: "March 21, 2024",
//       time: "9:00 AM - 1:00 PM",
//       classes: "Grade 6-8",
//       venue: "School Auditorium",
//       type: "Regular PTM"
//     },
//     {
//       date: "March 22, 2024",
//       time: "9:00 AM - 1:00 PM",
//       classes: "Grade 9-12",
//       venue: "School Auditorium",
//       type: "Regular PTM"
//     },
//     {
//       date: "April 5, 2024",
//       time: "2:00 PM - 4:00 PM",
//       classes: "Grade 10 & 12",
//       venue: "Principal's Office",
//       type: "Special Meeting"
//     },
//     {
//       date: "October 15, 2024",
//       time: "9:00 AM - 1:00 PM",
//       classes: "All Classes",
//       venue: "School Auditorium",
//       type: "Mid-term PTM"
//     },
//   ]

//   // Fee Payment Information
//   // Notices Data
  

//   // Downloadable Forms
  

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
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
//               Academic Resources
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
//               Examination & <span className="text-chart-1">Academics</span>
//             </h1>
//             <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
//               Access examination schedules, fee information, notices, and academic resources
//             </p>
//             <div className="w-24 h-1 bg-chart-1 mx-auto"></div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-12 md:py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">

//             {/* Examination Schedule Tab */}
//             {/* {activeTab === "exams" && ( */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="space-y-8"
//             >
//               <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                 <div>
//                   <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
//                     Examination Schedule 2024-25
//                   </h2>
//                   <p className="text-muted-foreground">
//                     Important dates and schedules for all examinations
//                   </p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {examSchedules.map((exam, index) => (
//                   <div
//                     key={index}
//                     className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
//                   >
//                     <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
//                       <div className="flex-1">
//                         <div className="flex items-center gap-3 mb-3">
//                           {/* <div className={`px-3 py-1 rounded-full text-xs font-medium ${exam.color}`}>
//                             {exam.status}
//                           </div> */}
//                           <span className="text-sm text-muted-foreground">{exam.classes}</span>
//                         </div>
//                         <h3 className="text-xl font-bold text-foreground mb-2">{exam.term}</h3>
//                         <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                           <div className="flex items-center gap-2">
//                             <Calendar className="w-4 h-4" />
//                             <span>{exam.date}</span>
//                           </div>
//                         </div>
//                       </div>
//                       {/* <div className="flex gap-2">
//                         <button className="p-2 text-muted-foreground hover:text-foreground">
//                           <Bookmark className="w-5 h-5" />
//                         </button>
//                         <button className="p-2 text-muted-foreground hover:text-foreground">
//                           <Share2 className="w-5 h-5" />
//                         </button>
//                       </div> */}
//                     </div>
//                   </div>
//                 ))}
//               </div>

              
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="mb-12"
//             >
//               <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-6">Upcoming Events</h2>
              
//               <div className="bg-card rounded-2xl p-6 border border-border">
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="border-b border-border">
//                         <th className="text-left py-4 px-4 font-semibold text-foreground">Event</th>
//                         <th className="text-left py-4 px-4 font-semibold text-foreground">Date & Time</th>
//                         <th className="text-left py-4 px-4 font-semibold text-foreground">Venue</th>
//                         <th className="text-left py-4 px-4 font-semibold text-foreground">Participants</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {upcomingEvents.map((event, index) => (
//                         <tr key={index} className="border-b border-border hover:bg-muted/50">
//                           <td className="py-4 px-4">
//                             <div>
//                               <div className="font-medium text-foreground">{event.title}</div>
//                               <div className="text-sm text-muted-foreground">{event.category}</div>
//                             </div>
//                           </td>
//                           <td className="py-4 px-4">
//                             <div className="space-y-1">
//                               <div className="flex items-center gap-2">
//                                 <Calendar className="w-4 h-4 text-muted-foreground" />
//                                 <span className="text-sm">{event.date}</span>
//                               </div>
//                               <div className="flex items-center gap-2">
//                                 <Clock className="w-4 h-4 text-muted-foreground" />
//                                 <span className="text-sm">{event.time}</span>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="py-4 px-4 text-sm text-muted-foreground">{event.venue}</td>
//                           <td className="py-4 px-4 text-sm text-muted-foreground">{event.participants}</td>
//                           <td className="py-4 px-4">
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </motion.div>
//             {/* )} */}

//             {/* PTM Schedule Tab */}
//             {/* {activeTab === "ptm" && ( */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="space-y-8"
//             >
//               <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 my-10">
//                 <div>
//                   <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
//                     Parent-Teacher Meeting Schedule
//                   </h2>
//                   <p className="text-muted-foreground">
//                     Schedule for parent-teacher interactions and progress discussions
//                   </p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {ptmSchedules.map((ptm, index) => (
//                   <div
//                     key={index}
//                     className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
//                   >
//                     <div className="flex items-start justify-between gap-4">
//                       <div className="flex-1">
//                         <div className="flex items-center gap-3 mb-3">
//                           {/* <span className="px-3 py-1 bg-chart-1/10 text-chart-1 rounded-full text-xs font-medium">
//                             {ptm.type}
//                           </span> */}
//                         </div>
//                         <h3 className="text-xl font-bold text-foreground mb-2">{ptm.classes}</h3>
//                         <div className="space-y-2">
//                           <div className="flex items-center gap-2 text-muted-foreground">
//                             <Calendar className="w-4 h-4" />
//                             <span className="font-medium text-foreground">{ptm.date}</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-muted-foreground">
//                             <Clock className="w-4 h-4" />
//                             <span>{ptm.time}</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-muted-foreground">
//                             <FileText className="w-4 h-4" />
//                             <span>Venue: {ptm.venue}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="bg-card rounded-2xl p-6 border border-border">
//                 <h3 className="text-xl font-bold text-foreground mb-4">Meeting Guidelines</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <h4 className="font-semibold text-foreground mb-2">For Parents:</h4>
//                     <ul className="space-y-2 text-sm text-muted-foreground">
//                       <li>• Please arrive 10 minutes before your scheduled time</li>
//                       <li>• Bring your child&apos;s latest report card</li>
//                       <li>• Prepare questions in advance</li>
//                       <li>• Keep discussions focused on academic progress</li>
//                     </ul>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground mb-2">Meeting Duration:</h4>
//                     <ul className="space-y-2 text-sm text-muted-foreground">
//                       <li>• Regular PTM: 10-15 minutes per parent</li>
//                       <li>• Special Meetings: 20-30 minutes as needed</li>
//                       <li>• Follow-up meetings can be scheduled if required</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//           </div>
//         </div> 
//       </section>
//     </div>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Calendar, Clock, FileText } from "lucide-react"
import { payloadClient } from "@/app/(frontend)/lib/payload-client"

export default function AcademicsPage() {
  const [loading, setLoading] = useState(true)
  
  // Dynamic data states
  const [upcomingEvents, setUpcomingEvents] = useState<Array<{
    title: string;
    date: string;
    time: string;
    venue: string;
    category: string;
    participants: string;
  }>>([])
  
  const [examSchedules, setExamSchedules] = useState<Array<{
    term: string;
    date: string;
    classes: string;
    status: string;
    color: string;
  }>>([])
  
  const [ptmSchedules, setPtmSchedules] = useState<Array<{
    date: string;
    time: string;
    classes: string;
    venue: string;
    type: string;
  }>>([])
  
  const [ptmGuidelines, setPtmGuidelines] = useState<string[]>([])
  const [meetingDurationInfo, setMeetingDurationInfo] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [events, exams, ptms, guidelines, durationInfo] = await Promise.all([
          payloadClient.getUpcomingEvents(),
          payloadClient.getSchedules(),
          payloadClient.getPTMSchedule(),
          payloadClient.getPTMGuidelines(),
          payloadClient.getMeetingDurationInfo()
        ])

        // Transform events data
        const transformedEvents = events.map((event: any) => ({
          title: event.title,
          date: new Date(event.date).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          }),
          time: event.time || '9:00 AM - 4:00 PM',
          venue: event.venue || 'School Premises',
          category: event.type || 'event',
          participants: event.participants || 'All Students'
        }))
        setUpcomingEvents(transformedEvents)
        
        // Set exam schedules
        setExamSchedules(exams)
        
        // Set PTM schedules
        setPtmSchedules(ptms)
        
        // Set guidelines and info
        setPtmGuidelines(guidelines)
        setMeetingDurationInfo(durationInfo)
        
      } catch (error) {
        console.error("Error fetching schedules data:", error)
        
        // Fallback to default data
        setUpcomingEvents([
          {
            title: "Inter-house Sports Meet",
            date: "March 25, 2024",
            time: "9:00 AM - 4:00 PM",
            venue: "School Ground",
            category: "sports",
            participants: "All Students"
          },
          {
            title: "Art Exhibition",
            date: "April 5, 2024",
            time: "10:00 AM - 5:00 PM",
            venue: "Art Gallery",
            category: "arts",
            participants: "Art Club Members"
          },
          {
            title: "Music Recital",
            date: "April 12, 2024",
            time: "4:00 PM - 6:00 PM",
            venue: "Auditorium",
            category: "music",
            participants: "Music Students"
          },
          {
            title: "Drama Production",
            date: "April 20, 2024",
            time: "5:00 PM - 8:00 PM",
            venue: "Auditorium",
            category: "drama",
            participants: "Drama Club"
          },
        ])
        
        setExamSchedules([
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
        ])
        
        setPtmSchedules([
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
        ])
        
        setPtmGuidelines([
          'Please arrive 10 minutes before your scheduled time',
          'Bring your child\'s latest report card',
          'Prepare questions in advance',
          'Keep discussions focused on academic progress'
        ])
        
        setMeetingDurationInfo(`• Regular PTM: 10-15 minutes per parent
• Special Meetings: 20-30 minutes as needed
• Follow-up meetings can be scheduled if required`)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-chart-1 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading schedules...</p>
        </div>
      </div>
    )
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

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Examination Schedule */}
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
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-6">Upcoming Events</h2>
              
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Event</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Date & Time</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Venue</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Participants</th>
                      </tr>
                    </thead>
                    <tbody>
                      {upcomingEvents.map((event, index) => (
                        <tr key={index} className="border-b border-border hover:bg-muted/50">
                          <td className="py-4 px-4">
                            <div>
                              <div className="font-medium text-foreground">{event.title}</div>
                              <div className="text-sm text-muted-foreground">{event.category}</div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm">{event.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm">{event.time}</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-sm text-muted-foreground">{event.venue}</td>
                          <td className="py-4 px-4 text-sm text-muted-foreground">{event.participants}</td>
                          <td className="py-4 px-4">
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* PTM Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 my-10">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Parent-Teacher Meeting Schedule
                  </h2>
                  <p className="text-muted-foreground">
                    Schedule for parent-teacher interactions and progress discussions
                  </p>
                </div>
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
                      {ptmGuidelines.map((guideline, index) => (
                        <li key={index}>• {guideline}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Meeting Duration:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {meetingDurationInfo.split('\n').map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div> 
      </section>
    </div>
  )
}