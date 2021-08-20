import { Review } from "../models/review.js"
import { Media } from '../models/media.js'
import {Profile} from '../models/profile.js'

export {
  create,
  deleteReview as delete,
  showReview,
}

function showReview(req, res) {
  Review.find({api_id: req.params.id})
  .populate('author')
  .populate('media')
  .then(review => {
    res.json(review)
  })
}

function deleteReview(req, res) {
  Review.findByIdAndDelete(req.params.id)
  .then(review => {
    res.json(review)
  })
}

function create(req, res) {
  Review.create(req.body)
  .then(review => {
    review.populate('author').populate('media').execPopulate()
    .then(()=> {
      res.json(review)
    })
  })
}

