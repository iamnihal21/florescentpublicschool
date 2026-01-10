import { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
  slug: 'home-page',
  admin: {
    group: 'Pages',
  },
  fields: [
    {
      name: 'heroSlides',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'highlightWord', type: 'text' },
        { name: 'image', type: 'upload', relationTo: 'media', }//required: true },
      ],
    },
    {
      name: 'scrollCards',
      label: 'Scroll Content (4 Cards)',
      type: 'array',
      maxRows: 4,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'image', type: 'upload', relationTo: 'media'}, // required: true },
        { name: 'buttonText', type: 'text' },
      ],
    },
    {
      name: 'resultsHighlight',
      type: 'array',
      fields: [
        { name: 'year', type: 'text' },
        { name: 'title', type: 'text' },
        { name: 'image', type: 'upload', relationTo: 'media' },
        {
          name: 'stats',
          type: 'array',
          fields: [
            { name: 'label', type: 'text' },
            { name: 'value', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'contactUs', // This matches the key used in your component prop
      type: 'group',
      label: 'Campus Map & Contact Info',
      fields: [
        {
          name: 'schoolAddress',
          type: 'group',
          fields: [
            { name: 'street', type: 'text', required: true },
            { name: 'city', type: 'text', required: true },
          ],
        },
        {
          name: 'primaryContact',
          type: 'group',
          fields: [
            { name: 'phone', type: 'text', required: true },
          ],
        },
        {
          name: 'locationInfo',
          type: 'group',
          fields: [
            { 
              name: 'mapEmbedUrl', 
              type: 'text', 
              required: true,
              admin: {
                description: 'Paste the "src" URL from the Google Maps iframe embed code.'
              }
            },
          ],
        },
        {
          name: 'responseTime',
          type: 'group',
          fields: [
            { name: 'admissionResponse', type: 'text', defaultValue: '24-48 Hours' },
          ],
        },
      ],
    },
  ],
}