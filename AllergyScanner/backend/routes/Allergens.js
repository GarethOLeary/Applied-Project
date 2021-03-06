const express = require('express')
const router = express.Router()
const { Allergens } = require('../models/Allergens')

// post request to find all allergens for each user
router.post('/', (req, res) => {
  Allergens.find({ userFrom: req.body.userFrom }).exec((err, allergens) => {
    if (err) return res.status(400).send(err)
    return res.status(200).json({ success: true, allergens })
  })
})

// post request to add allergens
router.post('/addAllergens', (req, res) => {
  const allergen = new Allergens(req.body)
  console.log(req.body)
  allergen
    .save()
    .then((rese) => res.json(rese))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// post request to delete all allergens
router.post('/removeAll', (req, res) => {
  Allergens.deleteMany({ userFrom: req.body.userFrom }).exec(
    (err, allergens) => {
      if (err) return res.status(400).send(err)
      return res.status(200).json({ success: true, allergens })
    },
  )
})

// post request to delete an allergen
router.post('/removeAllergen', (req, res) => {
  Allergens.findOneAndDelete({
    _id: req.body._id,
    userFrom: req.body.userFrom,
  }).exec((err, doc) => {
    if (err) return res.status(400).json({ success: false, err })
    res.status(200).json({ success: true, doc })
  })
})

// put request to update an allergen
router.put('/editAllergens/:id', (req, res, next) => {
  console.log(req.params.id)
  console.log(req.body)

  Allergens.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },
    (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    },
  )
})

module.exports = router
