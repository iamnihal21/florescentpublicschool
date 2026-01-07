import { Suspense } from 'react'
import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import SchoolMainUI from './SchoolMainUI'
import SchoolSkeleton from './SchoolSkeleton'

export default async function SchoolAchievementsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Suspense allows Next.js to swap the URL and show the UI Shell (Skeleton)
          immediately while the DataFetcher waits for the CMS response.
      */}
      <Suspense fallback={<SchoolSkeleton />}>
        <SchoolDataFetcher />
      </Suspense>
    </main>
  )
}

async function SchoolDataFetcher() {
  const payload = await getPayload({ config })
  
  const data = await payload.findGlobal({
    slug: 'achievements-page',
  })

  // We pass only the specific section needed to the Client UI
  return <SchoolMainUI data={data.schoolAchievements} />
}