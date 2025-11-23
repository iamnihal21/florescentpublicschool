// "use client"

// import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
// import Link from "next/link"
// import { motion } from "framer-motion"

// export function Footer() {
//   const faqs = [
//     {
//       question: "What are the admission requirements?",
//       answer: "Strong academic record, entrance exam, teacher recommendations, and personal interview.",
//     },
//     {
//       question: "When is the application deadline?",
//       answer: "Applications for Fall enrollment are due by January 15th each year.",
//     },
//     {
//       question: "Do you offer financial aid?",
//       answer: "Yes, we offer need-based financial aid and merit scholarships to qualified students.",
//     },
//     {
//       question: "What is the student-teacher ratio?",
//       answer: "We maintain a 10:1 student-teacher ratio to ensure personalized attention.",
//     },
//   ]

//   return (
//     <footer className="bg-charcoal text-white">

//       {/* FAQ Section */}
//       {/* FAQ Section with Funky Background */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="border-b border-gray-700 relative overflow-hidden"
//       >

//         {/* FAQ Section with Funky Repeating Background */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="border-b border-gray-700 relative overflow-hidden"
//         >

//           {/* 🟡 FUNKY BACKGROUND — repeating your uploaded image */}
//           <div
//             className="absolute inset-0 opacity-15 pointer-events-none
//                bg-[url('/UI/help.png')]
//                bg-repeat
//                bg-[size:180px_180px]
//                bg-center"
//           />

//           <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//               <span className="text-primary">FAQ</span>
//             </h2>

//             <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//               {faqs.map((faq, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.15 }}
//                   viewport={{ once: true }}
//                   className="space-y-2 bg-white/5 p-4 rounded-lg backdrop-blur-sm"
//                 >
//                   <h3 className="text-lg font-semibold text-primary">{faq.question}</h3>
//                   <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>


//         {/* Contact + Quick Links + Social */}
//         <div className="container mx-auto px-4 py-12">
//           <div className="grid md:grid-cols-3 gap-12">

//             {/* Contact */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <h3 className="text-xl font-bold mb-4">Contact Us</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
//                   <p className="text-gray-300 leading-relaxed">
//                     3700 Coldwater Canyon Ave
//                     <br />
//                     Studio City, CA 91604
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <Phone className="w-5 h-5 text-primary flex-shrink-0" />
//                   <a href="tel:+18189801234" className="text-gray-300 hover:text-primary transition-colors">
//                     (818) 980-1234
//                   </a>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <Mail className="w-5 h-5 text-primary flex-shrink-0" />
//                   <a href="mailto:admissions@hw.com" className="text-gray-300 hover:text-primary transition-colors">
//                     admissions@hw.com
//                   </a>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Quick Links */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.15 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//               <nav className="flex flex-col space-y-3">
//                 <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link>
//                 <Link href="/admissions" className="text-gray-300 hover:text-primary transition-colors">Admissions</Link>
//                 <Link href="/academics" className="text-gray-300 hover:text-primary transition-colors">Academics</Link>
//                 <Link href="/student-life" className="text-gray-300 hover:text-primary transition-colors">Student Life</Link>
//                 <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link>
//               </nav>
//             </motion.div>

//             {/* Social */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <h3 className="text-xl font-bold mb-4">Connect With Us</h3>

//               <div className="flex gap-4">
//                 {[
//                   { href: "https://facebook.com", icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
//                   { href: "https://twitter.com", icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
//                   { href: "https://instagram.com", icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
//                   { href: "https://linkedin.com", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
//                   { href: "https://youtube.com", icon: <Youtube className="w-5 h-5" />, label: "YouTube" },
//                 ].map(({ href, icon, label }) => (
//                   <a
//                     key={label}
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={label}
//                     className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors hover:scale-110 duration-300"
//                   >
//                     {icon}
//                   </a>
//                 ))}
//               </div>

//               <p className="text-gray-400 text-sm mt-6 leading-relaxed">
//                 Stay updated with our latest news, events, and achievements by following us on social media.
//               </p>
//             </motion.div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="border-t border-gray-700"
//         >
//           <div className="container mx-auto px-4 py-6">
//             <p className="text-center text-gray-400 text-sm">
//               © {new Date().getFullYear()} Harvard Westlake School. All rights reserved.
//             </p>
//           </div>
//         </motion.div>
//     </footer>
//   )
// }


import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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

  return (
    <footer className="bg-charcoal text-white">
      {/* FAQs Section */}
      <div className="border-b border-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/UI/help.png"
            alt=""
            width={80}
            height={80}
            className="absolute top-[10%] left-[5%] opacity-10 rotate-[-15deg]"
          />
          <Image
            src="/UI/help.png"
            alt=""
            width={100}
            height={100}
            className="absolute top-[60%] left-[8%] opacity-10 rotate-[-20deg]"
          />
          <Image
            src="/UI/help.png"
            alt=""
            width={70}
            height={70}
            className="absolute top-[30%] right-[10%] opacity-10 rotate-12deg"
          />
          <Image
            src="/UI/help.png"
            alt=""
            width={90}
            height={90}
            className="absolute top-[75%] right-[6%] opacity-10 rotate-[-18deg]"
          />
          <Image
            src="/UI/help.png"
            alt=""
            width={60}
            height={60}
            className="absolute top-[45%] left-[50%] opacity-10 rotate-[-25deg]"
          />
        </div>
        {/* </CHANGE> */}

        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-primary">FAQs</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact & Social Media Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    3700 Coldwater Canyon Ave
                    <br />
                    Studio City, CA 91604
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+18189801234" className="text-gray-300 hover:text-primary transition-colors">
                  (818) 980-1234
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:admissions@hw.com" className="text-gray-300 hover:text-primary transition-colors">
                  admissions@hw.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/admissions" className="text-gray-300 hover:text-primary transition-colors">
                Admissions
              </Link>
              <Link href="/academics" className="text-gray-300 hover:text-primary transition-colors">
                Academics
              </Link>
              <Link href="/student-life" className="text-gray-300 hover:text-primary transition-colors">
                Student Life
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-6 leading-relaxed">
              Stay updated with our latest news, events, and achievements by following us on social media.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Harvard Westlake School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
