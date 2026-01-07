import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import { 
  About, 
  Testimonial, 
  Result, 
  Media,
  ContactUs
} from '@/payload/payload-types'

/**
 * Global cache for the Payload instance to prevent multiple 
 * connections during Next.js Hot Module Replacement (HMR).
 */
let cached = (global as any).payload

if (!cached) {
  cached = (global as any).payload = { client: null, promise: null }
}

export async function getPayloadClient() {
  if (cached.client) {
    return cached.client
  }

  if (!cached.promise) {
    cached.promise = getPayload({
      config,
    })
  }

  try {
    cached.client = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.client
}

/**
 * Type-safe helper functions specifically mapped to your schema 
 * defined in payload.config.ts.
 */
export const api = {
  // --- Globals ---
  async getAboutPage(): Promise<About> {
    const payload = await getPayloadClient()
    return await payload.findGlobal({ slug: 'about' })
  },

  async getContactInfo(): Promise<ContactUs> {
    const payload = await getPayloadClient()
    return await payload.findGlobal({ slug: 'contact-us' })
  },

  // --- Collections ---
  async getTestimonials(limit = 10): Promise<Testimonial[]> {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'testimonials',
      limit,
      sort: '-createdAt',
    })
    return result.docs
  },

  async getResults(): Promise<Result[]> {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'academic-results',
      sort: '-year',
    })
    return result.docs
  },

  async getMediaById(id: string): Promise<Media | null> {
    const payload = await getPayloadClient()
    try {
      return await payload.findByID({
        collection: 'media',
        id,
      })
    } catch {
      return null
    }
  }
}