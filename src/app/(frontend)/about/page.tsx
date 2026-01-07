import { Suspense } from 'react'
import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import AboutUI from './AboutUI'
import AboutSkeleton from './AboutSkeleton'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* This is the magic fix. Suspense tells Next.js:
        "Switch to the /about URL immediately and show the Skeleton 
        while DataFetcher is busy talking to the database."
      */}
      <Suspense fallback={<AboutSkeleton />}>
        <AboutDataFetcher />
      </Suspense>
    </main>
  )
}

async function AboutDataFetcher() {
  const payload = await getPayload({ config })
  const data = await payload.findGlobal({ slug: 'about-page' })

  // Once the data is fetched, it replaces the Skeleton with the actual UI
  return <AboutUI data={data} />
}