import axios, { AxiosResponse } from 'axios'
import Work from '../interface/Work'

export const getWorks = (filters: string[] = []) => new Promise<Work[]>(async (resolve) => {
  const { data }: AxiosResponse<{portpolios: Work[]}> = await axios.get('data/portfolio.json')

  setTimeout(() => {
    const result: Array<Work> = []

    if (filters.length < 1) {
      return resolve(data.portpolios)
    }

    new Set(filters.flatMap((tag: string) => data.portpolios.filter(work => work.tags.includes(tag)))).forEach((value: Work) => {
      result.push(value)
    })

    resolve(result)
  }, 1000)
}) 