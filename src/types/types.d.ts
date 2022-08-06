// export type Visibility = 'great' | 'good' | 'ok' | 'poor'

import { Weather, Visibility } from './enums'

export interface DiaryEntry { // la interfaz está pensada para ser extensible (datos embebidos)
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id', 'date', 'visibility', 'weather'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

// // no se usará but
// interface SpecialDiaryEntry extends DiaryEntry {
//   flightNumber: number
// } // interfaz embebida; SpecialDiaryEntry contará con este daño - DiaryEntry NO.
