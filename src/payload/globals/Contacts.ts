import { GlobalConfig } from 'payload'

export const ContactUs: GlobalConfig = {
  slug: 'contact-us',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Globals',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'School Address',
          fields: [
            {
              name: 'schoolAddress',
              type: 'group',
              fields: [
                {
                  name: 'street',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'city',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Primary Contact',
          fields: [
            {
              name: 'primaryContact',
              type: 'group',
              fields: [
                {
                  name: 'phone',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'email',
                  type: 'email',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Location & Hours',
          fields: [
            {
              name: 'locationInfo',
              type: 'group',
              fields: [
                {
                  name: 'mapEmbedUrl',
                  type: 'text',
                  label: 'Google Maps Embed URL',
                  required: true,
                },
              ],
            },
            {
              name: 'responseTime',
              type: 'group',
              fields: [
                {
                  name: 'admissionResponse',
                  type: 'text',
                  label: 'Admission Response Time',
                  defaultValue: '24-48 Hours',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}