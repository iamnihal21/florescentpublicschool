import { GlobalConfig } from 'payload'

export const ScholarshipPage: GlobalConfig = {
  slug: 'scholarship-page',
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
        { name: 'title', type: 'text', defaultValue: 'Sanstha Dip Naresh Sir Scholarship' },
        { name: 'description', type: 'textarea' },
      ]
    },
    {
      name: 'scholarships',
      type: 'array',
      label: 'List of Scholarships',
      fields: [
        { name: 'standardRange', type: 'text', label: 'Standards (e.g. 1 to 7)' },
        { name: 'criteria', type: 'text', label: 'Criteria (e.g. 1st Rank or 85%+)' },
        { name: 'reward', type: 'text', label: 'Reward Amount/Prize' },
        { name: 'iconName', type: 'text', label: 'Lucide Icon Name (e.g. Trophy, Award, Star)' },
      ]
    },
    {
      name: 'conditions',
      type: 'array',
      label: 'Terms & Conditions',
      fields: [
        { name: 'rule', type: 'textarea' }
      ]
    }
  ],
}