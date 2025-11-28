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
    <footer className="bg-charcoal text-white border-1 border-black">
      {/* ------------------------ FAQs Section ------------------------ */}
      <motion.div
        className="border-b border-gray-700 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute inset-0 pointer-events-none">
          {[
            { top: 10, left: 5, size: 60, delay: 0, duration: 3 },
            { top: 60, left: 8, size: 70, delay: 0.5, duration: 3.5 },
            { top: 25, right: 10, size: 80, delay: 1, duration: 4 },
            { top: 75, right: 8, size: 90, delay: 1.5, duration: 3.2 },
            { top: 20, left: 15, size: 65, delay: 0.8, duration: 3.3 },
            { top: 55, right: 15, size: 85, delay: 1.8, duration: 3.6 },
          ].map((icon, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: icon.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: icon.delay,
                ease: "easeInOut",
              }}
              className="absolute"
              style={{
                top: `${icon.top}%`,
                left: icon.left !== undefined ? `${icon.left}%` : "auto",
                right: icon.right !== undefined ? `${icon.right}%` : "auto",
              }}
            >
              <Image src="/UI/help.png" alt="" width={icon.size} height={icon.size} className="opacity-10" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="text-chart-4">FAQs</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="space-y-2"
              >
                <h3 className="text-lg font-semibold text-ring">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

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
            <p className="text-gray-400 text-sm mt-6 leading-relaxed">
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
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Harvard Westlake School. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
