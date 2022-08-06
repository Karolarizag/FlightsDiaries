import express from 'express'
import * as diaryServices from '../services/diariesServices'
import toNewDiaryEntry from '../utils/utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)

  return (diary !== null)
    ? res.json(diary)
    : res.json(404)
})

router.get('/:id/nonsensitive', (req, res) => {
  const diary = diaryServices.findByIdNonSensitiveContent(+req.params.id)

  return (diary !== null)
    ? res.json(diary)
    : res.json(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

export default router
