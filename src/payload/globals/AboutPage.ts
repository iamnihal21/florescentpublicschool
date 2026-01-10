// import { GlobalConfig } from 'payload'

// export const AboutPage: GlobalConfig = {
//   slug: 'about-page',
//   admin: {
//     group: 'Pages',
//   },
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'hero',
//       type: 'group',
//       fields: [
//         { name: 'badge', type: 'text', defaultValue: 'About Our Institution' },
//         { name: 'title', type: 'text', required: true },
//         { name: 'description', type: 'textarea' },
//       ],
//     },
//     {
//       name: 'leadership',
//       type: 'array',
//       label: 'Leadership Team',
//       minRows: 1,
//       maxRows: 3,
//       fields: [
//         { name: 'name', type: 'text', required: true },
//         { name: 'role', type: 'text', required: true },
//         { name: 'image', type: 'upload', relationTo: 'media', required: true },
//         { name: 'message', type: 'textarea', required: true },
//         {
//           name: 'gradient',
//           type: 'select',
//           options: [
//             { label: 'Amber/Orange', value: 'from-amber-500 to-orange-500' },
//             { label: 'Purple/Pink', value: 'from-purple-500 to-pink-500' },
//             { label: 'Blue/Cyan', value: 'from-blue-500 to-cyan-500' },
//           ],
//           defaultValue: 'from-amber-500 to-orange-500',
//         },
//         {
//           name: 'achievements',
//           type: 'array',
//           fields: [{ name: 'item', type: 'text' }],
//         },
//       ],
//     },
//     {
//       name: 'establishedYear',
//       type: 'number',
//       defaultValue: 1995,
//     }
//   ],
// }

import { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  admin: {
    group: 'Pages',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'About Our Institution' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
      ],
    },

    {
      name: 'leadership',
      type: 'array',
      label: 'Leadership Team',
      minRows: 1,
      maxRows: 3,
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text', required: true },

        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          // required: true,
        },

        /** ✅ NEW: Introduction */
        {
          name: 'introduction',
          label: 'Leader Introduction',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Brief professional introduction/background of the leader',
          },
        },

        /** ✅ Message from leader */
        {
          name: 'message',
          label: 'Message from Leader',
          type: 'textarea',
          required: true,
        },

        {
          name: 'gradient',
          type: 'select',
          options: [
            { label: 'Amber / Orange', value: 'from-amber-500 to-orange-500' },
            { label: 'Purple / Pink', value: 'from-purple-500 to-pink-500' },
            { label: 'Blue / Cyan', value: 'from-blue-500 to-cyan-500' },
          ],
          defaultValue: 'from-amber-500 to-orange-500',
        },

        /** Achievements */
        {
          name: 'achievements',
          type: 'array',
          fields: [{ name: 'item', type: 'text' }],
        },
      ],
    },

    {
      name: 'establishedYear',
      type: 'number',
      defaultValue: 1995,
    },
  ],
}
