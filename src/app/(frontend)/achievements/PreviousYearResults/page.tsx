import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import ResultsView from './prevRes'

export default async function ResultsPage() {
  const payload = await getPayload({ config })
  const globalData = await payload.findGlobal({
    slug: 'achievements-page',
  })

  return <ResultsView data={globalData.resultsSection} />
}