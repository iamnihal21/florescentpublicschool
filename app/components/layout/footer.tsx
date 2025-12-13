"use client"

import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function Footer() {
  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "Strong academic record, entrance exam, teacher recommendations, and personal interview.",
    },
    {
      question: "When is the application deadline?",
      answer: "Applications for Fall enrollment are due by January 15th each year.",
    },
    {
      question: "Do you offer financial aid?",
      answer: "Yes, we offer need-based financial aid and merit scholarships to qualified students.",
    },
    {
      question: "What is the student-teacher ratio?",
      answer: "We maintain a 10:1 student-teacher ratio to ensure personalized attention.",
    },
  ]

  // Reusable fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <footer className="bg-charcoal text-white border border-black">
      

      {/* --------------------- Contact & Social Links --------------------- */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact */}
          <motion.div
            className="space-y-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <p className="text-gray-400 leading-relaxed">
                  3700 Coldwater Canyon Ave
                  <br />
                  Studio City, CA 91604
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+18189801234" className="text-gray-400 hover:text-primary transition-colors">
                  (818) 980-1234
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:admissions@hw.com" className="text-gray-400 hover:text-primary transition-colors">
                  admissions@hw.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {["About", "Admissions", "Academics", "Student Life", "Contact"].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="space-y-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="black text-sm mt-6 leading-relaxed">
              Stay updated with our latest news, events, and achievements by following us on social media.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ------------------------ Copyright ------------------------ */}
      <motion.div
        className="border-t border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 py-6">
          <p className="text-center black text-sm text-gray-300">
            © {new Date().getFullYear()} Harvard Westlake School. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
