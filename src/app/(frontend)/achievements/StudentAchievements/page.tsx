import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import StudentView from './studentAch' // Ensure the filename matches your UI component

export default async function AchievementsLandingPage() {
  const payload = await getPayload({ config })
  
  // Fetching data from the updated slug 'achievements-page'
  const data = await payload.findGlobal({
    slug: 'achievements-page',
  })

  // Map DB data to match the UI component's expected structure
  const formattedStudents = data.studentAchievements?.students?.map((item: any) => ({
    id: item.id,
    name: item.name,                 // Correct property
    achievementTitle: item.achievementTitle, // Correct property
    description: item.description,
    image: item.image,
  })) || []

  return (
    <main>
      {/* Rendering the Redesigned Modern UI */}
      <StudentView students={formattedStudents} />
    </main>
  )
}
