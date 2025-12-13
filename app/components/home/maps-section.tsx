"use client"

import { motion } from "framer-motion"

export function MapsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Visit Our Campus</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Come explore our state-of-the-art facilities and experience our vibrant learning community firsthand.
            </p>
          </motion.div>

          {/* Map */}
          <motion.div
            className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0244310670387!2d72.5199150753149!3d23.059565879147904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e835519d27f37%3A0xa903dd3f424f9a0f!2sFlorescent%20school!5e0!3m2!1sen!2sin!4v1763745880149!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location Map"
            />
          </motion.div>

          {/* Info Cards */}
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            {[ 
              {
                title: "Address",
                content: (
                  <>
                    3700 Coldwater Canyon Ave
                    <br />
                    Studio City, CA 91604
                  </>
                )
              },
              {
                title: "Phone",
                content: "(818) 487-6600"
              },
              {
                title: "Hours",
                content: "Mon - Fri: 8:00 AM - 4:00 PM"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-card rounded-lg border border-border"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
