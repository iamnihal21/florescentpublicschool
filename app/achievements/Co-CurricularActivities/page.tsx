"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { 
  Music, Palette, Dumbbell, Theater,
  Users, Trophy, Calendar, Clock,
  MapPin, Users2, Target, BookOpen,
  Filter, Search, Heart, Share2,
  ChevronRight, Play, Eye, Download
} from "lucide-react"

export default function CoCurricularPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [likedActivities, setLikedActivities] = useState<Set<number>>(new Set())

  const categories = [
    { id: "all", label: "All Activities", count: 32 },
    { id: "sports", label: "Sports", count: 12 },
    { id: "arts", label: "Arts & Crafts", count: 8 },
    { id: "music", label: "Music & Dance", count: 6 },
    { id: "drama", label: "Drama & Theater", count: 4 },
    { id: "clubs", label: "Student Clubs", count: 10 },
  ]

  const featuredActivities = [
    {
      id: 1,
      title: "Annual Music Concert",
      category: "music",
      description: "A grand musical extravaganza featuring student performances",
      schedule: "Every Friday, 3:00 PM - 5:00 PM",
      venue: "School Auditorium",
      instructor: "Mr. Sharma (Professional Musician)",
      capacity: "50 students",
      icon: Music,
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      id: 2,
      title: "Basketball Academy",
      category: "sports",
      description: "Professional coaching for budding basketball players",
      schedule: "Mon, Wed, Fri - 4:00 PM - 6:00 PM",
      venue: "School Basketball Court",
      instructor: "Coach Singh (State Level Player)",
      capacity: "30 students",
      icon: Dumbbell,
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      id: 3,
      title: "Art & Painting Workshop",
      category: "arts",
      description: "Creative sessions exploring various painting techniques",
      schedule: "Every Saturday, 10:00 AM - 1:00 PM",
      venue: "Art Room",
      instructor: "Ms. Gupta (Professional Artist)",
      capacity: "25 students",
      icon: Palette,
      color: "bg-pink-500/10 text-pink-500"
    },
  ]

  const clubsAndSocieties = [
    {
      name: "Science Club",
      category: "clubs",
      members: "45",
      description: "Exploring scientific wonders through experiments and projects",
      achievements: ["National Science Fair Winners", "3 Research Papers Published"],
      icon: BookOpen,
      color: "bg-blue-500/10"
    },
    {
      name: "Eco Warriors",
      category: "clubs",
      members: "38",
      description: "Environmental conservation and sustainability initiatives",
      achievements: ["Green School Certification", "Tree Plantation Drive"],
      icon: Users,
      color: "bg-green-500/10"
    },
    {
      name: "Literary Society",
      category: "clubs",
      members: "52",
      description: "Creative writing, debates, and literary discussions",
      achievements: ["Inter-school Debate Champions", "Published School Magazine"],
      icon: Theater,
      color: "bg-yellow-500/10"
    },
    {
      name: "Sports Council",
      category: "sports",
      members: "60",
      description: "Organizing sports events and promoting fitness",
      achievements: ["State Level Champions", "Annual Sports Day"],
      icon: Trophy,
      color: "bg-red-500/10"
    },
  ]

  const upcomingEvents = [
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
  ]

  const activitySchedule = [
    { day: "Monday", activities: ["Basketball", "Music", "Science Club"] },
    { day: "Tuesday", activities: ["Swimming", "Art", "Debate Club"] },
    { day: "Wednesday", activities: ["Football", "Dance", "Eco Club"] },
    { day: "Thursday", activities: ["Cricket", "Drama", "Literary Society"] },
    { day: "Friday", activities: ["Music Concert", "Yoga", "Sports Council"] },
    { day: "Saturday", activities: ["Art Workshop", "Special Events", "Club Meetings"] },
  ]

  const achievements = [
    { activity: "Basketball Team", achievement: "State Champions 2024", level: "State" },
    { activity: "Music Band", achievement: "National Competition Winners", level: "National" },
    { activity: "Art Club", achievement: "International Exhibition", level: "International" },
    { activity: "Debate Team", achievement: "Inter-school Champions", level: "Regional" },
  ]

  const resources = [
    { name: "Sports Equipment List", type: "PDF", size: "2.4 MB" },
    { name: "Music Practice Schedule", type: "DOC", size: "1.8 MB" },
    { name: "Art Supplies Guide", type: "PDF", size: "3.1 MB" },
    { name: "Club Registration Form", type: "DOC", size: "1.2 MB" },
  ]

  const toggleLike = (activityId: number) => {
    const newLiked = new Set(likedActivities)
    if (newLiked.has(activityId)) {
      newLiked.delete(activityId)
    } else {
      newLiked.add(activityId)
    }
    setLikedActivities(newLiked)
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
              Beyond Academics
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Co-curricular <span className="text-chart-1">Activities</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Nurturing talents, building character, and creating well-rounded individuals
            </p>
            <div className="w-24 h-1 bg-chart-1 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search activities..."
                  className="w-full bg-card border border-border rounded-xl pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-chart-1"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-foreground mb-4">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-chart-1 text-chart-1-foreground shadow'
                        : 'bg-card text-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    {category.label}
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === category.id
                        ? 'bg-chart-1-foreground/20'
                        : 'bg-muted'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-chart-1" />
                Featured Activities
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredActivities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 ${activity.color} rounded-xl flex items-center justify-center`}>
                          <activity.icon className="w-6 h-6" />
                        </div>
                        <button
                          onClick={() => toggleLike(activity.id)}
                          className={`p-2 rounded-full ${likedActivities.has(activity.id) ? 'text-red-500' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                          <Heart className={`w-5 h-5 ${likedActivities.has(activity.id) ? 'fill-current' : ''}`} />
                        </button>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3">{activity.title}</h3>
                      <p className="text-muted-foreground mb-6">{activity.description}</p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{activity.schedule}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{activity.venue}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users2 className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">Instructor: {activity.instructor}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">Capacity: {activity.capacity}</span>
                        </div>
                      </div>

                      <button className="w-full px-4 py-3 bg-chart-1 text-chart-1-foreground font-bold rounded-lg hover:bg-chart-1/90 transition-colors duration-300">
                        Register Now
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Clubs & Societies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Clubs & Societies</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {clubsAndSocieties.map((club, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 ${club.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <club.icon className="w-6 h-6 text-chart-1" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{club.name}</h3>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-muted-foreground">{club.members} Members</span>
                          <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                            {club.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{club.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {club.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">• {achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors">
                      Join Club
                    </button>
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
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Upcoming Events</h2>
              
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Event</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Date & Time</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Venue</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Participants</th>
                        <th className="text-left py-4 px-4 font-semibold text-foreground">Action</th>
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
                            <button className="px-4 py-2 bg-chart-1 text-chart-1-foreground text-sm font-medium rounded-lg hover:bg-chart-1/90 transition-colors">
                              Register
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* Weekly Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Weekly Activity Schedule</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activitySchedule.map((day, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-4">{day.day}</h3>
                    <ul className="space-y-3">
                      {day.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
                          <span className="text-muted-foreground">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Recent Achievements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 border border-border"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-foreground">{item.activity}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.level === 'International' ? 'bg-purple-500/10 text-purple-500' :
                        item.level === 'National' ? 'bg-blue-500/10 text-blue-500' :
                        item.level === 'State' ? 'bg-green-500/10 text-green-500' :
                        'bg-yellow-500/10 text-yellow-500'
                      }`}>
                        {item.level}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{item.achievement}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Resources & Downloads</h2>
              
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {resources.map((resource, index) => (
                    <div
                      key={index}
                      className="bg-background rounded-xl p-4 border border-border hover:shadow transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-chart-1/10 rounded-lg flex items-center justify-center">
                          <Download className="w-5 h-5 text-chart-1" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{resource.name}</div>
                          <div className="text-xs text-muted-foreground">{resource.type} • {resource.size}</div>
                        </div>
                      </div>
                      <button className="w-full px-3 py-2 bg-chart-1 text-chart-1-foreground text-sm font-medium rounded-lg hover:bg-chart-1/90 transition-colors">
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
                <Users className="w-8 h-8 text-chart-1" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Discover Your Passion
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our vibrant co-curricular community and explore activities that match your interests and talents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-chart-1 text-chart-1-foreground font-bold rounded-lg hover:bg-chart-1/90 transition-colors duration-300">
                  View All Activities
                </button>
                <button className="px-8 py-3 border-2 border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}