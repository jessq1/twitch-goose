import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Review
}

const reviewSchema = new Schema({
  rating: {type: Number, min: 1, max: 5},
  content: String,
  api_id: String,
  media: { type: mongoose.Schema.Types.ObjectId, ref: "Media" },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
},{
  timestamps: true,
})

const Review = mongoose.model("Review", reviewSchema)