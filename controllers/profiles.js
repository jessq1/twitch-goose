import { Profile } from "../models/profile.js"
import { Game } from '../models/game.js'
import { Streamer } from '../models/streamer.js'

export {
  userProfile,
  index,
  friend,
  unfriend
}

function friend(req, res) {
  // Find the user's profile
  Profile.findById(req.user.profile)
  .then(profile => {
    // push the friend's _id into the user's friends array
    profile.friends.push(req.params.id)
    // save the document
    profile.save()
    // populate the subdocs
    profile.populate('media').populate('friends').execPopulate()
    .then(()=> {
      res.json(profile)
    })
  })
}

function unfriend(req, res) {
  Profile.findById(req.user.profile)
  .populate('games')
  .populate('streamers')
  .populate('friends')
  .then(profile => {
    profile.friends.remove({ _id: req.params.id })
    profile.save()
    .then(()=> {
      res.json(profile)
    })
  })
}

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    console.log(profiles)
    res.json(profiles)
  })
}

function userProfile(req, res) {
  Profile.findById(req.user.profile)
  .populate('games')
  .populate('streamers')
  .populate('friends')
  .then(profile => {
    res.json(profile)
  })
}