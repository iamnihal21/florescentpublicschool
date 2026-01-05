import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import AdmissionView from './AdmissionWelcome'
import WhyChooseUsView from './WhyChooseUs'

export default async function Page() {
  const payload = await getPayload({ config })
  const data = await payload.findGlobal({ slug: 'admission-page' })

  return (
    <main>
      <AdmissionView data={data} />
      <WhyChooseUsView data={data} />
    </main>
  )
}