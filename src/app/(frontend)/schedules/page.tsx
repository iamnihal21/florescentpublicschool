import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import AcademicsView from './AcademicsView'

export default async function Page() {
  const payload = await getPayload({ config })
  const data = await payload.findGlobal({
    slug: 'academics-page',
  })

  return <AcademicsView data={data} />
}