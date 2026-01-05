import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import GalleryView from './GalleryView'

export default async function Page() {
  const payload = await getPayload({ config })
  
  const { docs: images } = await payload.find({
    collection: 'gallery',
    sort: '-date',
    limit: 100,
  })

  return (
    <main>
      <GalleryView initialImages={images} />
    </main>
  )
}