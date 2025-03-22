export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Square-pizza！'
export const headline = 'A student from Beijing University of Technology studying vortex-induced vibration and CFD, with a passion for photography and writing essays.'
export const introduction =
  "Calm down, where is my relaxing mucis CD?!"
export const email = '771375474@qq.com'
export const githubUsername = 'Squarepizza'

// about page
export const aboutMeHeadline = 'Why am I called Square Pizza?'
export const aboutParagraphs = [
  "Square pizza? What's wrong with this crazy state!",
  'Son, there will come a time in your life when you learn to accept all pizza',
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I will write down my thoughts on life and my emotional reflections.."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@harvard?lang=en',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/349721082',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
