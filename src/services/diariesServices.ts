import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types/types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[] // as... es para que el typescript trate el objeto que entra del json como el objeto/interfaz que hemos declarado en types.d.ts

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  return entry
}

export const findByIdNonSensitiveContent = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)

  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }

  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
}
