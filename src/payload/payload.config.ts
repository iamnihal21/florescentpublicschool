// import { postgresAdapter } from '@payloadcms/db-postgres'
// import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import path from 'path'
// import { buildConfig } from 'payload'
// import { fileURLToPath } from 'url'
// import sharp from 'sharp'

// import Media  from './collections/Media'
// import { Testimonials } from './collections/Testimonials'
// import { Home } from './globals/Home'
// import { AboutPage } from './globals/AboutPage'
// import { ContactPage } from './globals/Contacts'
// import { AchievementsPage } from './globals/Achievements'
// import { AcademicsPage } from './globals/AcademicsPage'
// import { Gallery } from './collections/Gallery'
// import { AdmissionPage } from './globals/AdmissionPage'
// import { Jobs } from './collections/Jobs'
// import { CareerPage } from './globals/CareerPage'
// import { s } from 'framer-motion/client'
// import { ScholarshipPage } from './globals/ScholarshipPage'
// import { Scholarships } from './collections/Scholarships'
// const filename = fileURLToPath(import.meta.url)
// const dirname = path.dirname(filename)

// export default buildConfig({
//   admin: {
//     autoLogin: { email: 'temp@gmail.com', password: '1234', prefillOnly: true },
//   },
//   collections: [
//     { slug: 'users', auth: true, fields: [] },
//     Media,
//     Testimonials,
//     Gallery,
//     Jobs,
//     Scholarships,
//   ],
//   globals: [Home,AboutPage,ContactPage,AchievementsPage,AcademicsPage,AdmissionPage,CareerPage, ScholarshipPage ],
//   editor: lexicalEditor({}),
//   secret: process.env.PAYLOAD_SECRET || '726d7f73873bff8db79de76eb067bad204c2ec494ef95e52824b132622d69e91',
//   db: postgresAdapter({
//     pool: { connectionString: process.env.DATABASE_URL || '' },
//   }),
//   typescript: {
//     outputFile: path.resolve(dirname, 'payload-types.ts'),
//   },
//   sharp,
// })

import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Import the S3 Storage Plugin
import { s3Storage } from '@payloadcms/storage-s3'

import Media from './collections/Media'
import { Testimonials } from './collections/Testimonials'
import { Home } from './globals/Home'
import { AboutPage } from './globals/AboutPage'
import { ContactPage } from './globals/Contacts'
import { AchievementsPage } from './globals/Achievements'
import { AcademicsPage } from './globals/AcademicsPage'
import { Gallery } from './collections/Gallery'
import { AdmissionPage } from './globals/AdmissionPage'
import { Jobs } from './collections/Jobs'
import { CareerPage } from './globals/CareerPage'
import { ScholarshipPage } from './globals/ScholarshipPage'
import { Scholarships } from './collections/Scholarships'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    autoLogin: { email: 'temp@gmail.com', password: '1234', prefillOnly: true },
  },
  collections: [
    { slug: 'users', auth: true, fields: [] },
    Media,
    Testimonials,
    Gallery,
    Jobs,
    Scholarships,
  ],
  globals: [Home, AboutPage, ContactPage, AchievementsPage, AcademicsPage, AdmissionPage, CareerPage, ScholarshipPage],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '726d7f73873bff8db79de76eb067bad204c2ec494ef95e52824b132622d69e91',
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || '' },
  }),
  plugins: [
    s3Storage({
      collections: {
        media: true, // This must match the slug of your Media collection
      },
      bucket: process.env.SUPABASE_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.SUPABASE_S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.SUPABASE_S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.SUPABASE_REGION || 'ap-south-1', // Update based on your project settings
        endpoint: process.env.SUPABASE_S3_ENDPOINT || '',
        forcePathStyle: true, // Critical for Supabase compatibility
      },
    }),
  ],
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  sharp,
})