import { Suspense } from 'react'
import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import ResultsMainUI from './ResultsMainUI'
import ResultsSkeleton from './ResultsSkeleton'

export default async function ResultsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* This boundary ensures the page changes INSTANTLY to 
          the /results URL while the database is queried. 
      */}
      <Suspense fallback={<ResultsSkeleton />}>
        <ResultsDataFetcher />
      </Suspense>
    </main>
  )
}

async function ResultsDataFetcher() {
  const payload = await getPayload({ config })
  
  const data = await payload.findGlobal({
    slug: 'achievements-page',
  })

  // Passing the resultsSection specifically to the UI
  return <ResultsMainUI data={data.resultsSection} />
}