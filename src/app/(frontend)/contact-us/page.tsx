import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import ContactView from './ContactView'

export default async function Page() {
  const payload = await getPayload({ config })
  const data = await payload.findGlobal({ slug: 'contact-page' })

  return <ContactView data={data} />
}