import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import CoCurricularView from './coCurricular'

export default async function CoCurricularPage() {
  const payload = await getPayload({ config })
  const data = await payload.findGlobal({
    slug: 'achievements-page',
  })

  return <CoCurricularView data={data.coCurricular} />
}