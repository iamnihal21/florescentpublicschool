import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import Media  from './collections/Media'
import { Testimonials } from './collections/Testimonials'
import { Results } from './collections/Results'
import { Home } from './globals/Home'
import { About } from './globals/About'
import { ContactUs } from './globals/Contacts'

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
    Results,
  ],
  globals: [Home,About, 
    ContactUs],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'YOUR_SECRET_HERE',
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || '' },
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  sharp,
})