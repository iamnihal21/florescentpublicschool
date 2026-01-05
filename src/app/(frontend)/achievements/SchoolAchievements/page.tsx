import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import SchoolView from './schoolAch'

export default async function SchoolAchievementsPage() {
  const payload = await getPayload({ config })
  const data = await payload.findGlobal({
    slug: 'achievements-page',
  })

  return <SchoolView data={data.schoolAchievements} />
}