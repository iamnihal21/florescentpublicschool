import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import CareerView from './CareerView'

export default async function Page() {
  const payload = await getPayload({ config })
  
  const staticData = await payload.findGlobal({ slug: 'career-page' })
  const { docs: jobs } = await payload.find({
    collection: 'jobs',
    where: { active: { equals: true } }
  })

  return <CareerView staticData={staticData} jobs={jobs} />
}