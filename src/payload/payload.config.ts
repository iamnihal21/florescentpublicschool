import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import Media  from './collections/Media'
import { Testimonials } from './collections/Testimonials'
import { Home } from './globals/Home'
import { AboutPage } from './globals/AboutPage'
import { ContactUs } from './globals/Contacts'
import { AchievementsPage } from './globals/Achievements'

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
  ],
  globals: [Home,AboutPage,ContactUs,AchievementsPage],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '726d7f73873bff8db79de76eb067bad204c2ec494ef95e52824b132622d69e91',
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || '' },
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  sharp,
})