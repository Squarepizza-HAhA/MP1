// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: 'BJUT',
      title: 'Still Student',
      logo: 'college',
      start: '2019',
      end: 'Present'
    },

  ]