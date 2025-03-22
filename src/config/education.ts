
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'BJUT',
      major: 'Civil Engineering',
      logo: 'college',
      start: '2023',
      end: '2026'
    },
    {
      school: 'HQU',
      major: 'Civil Engineering',
      logo: 'college',
      start: '2019',
      end: '2023'
    },
  ]