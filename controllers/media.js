import { Profile } from '../models/profile.js'
import { Media } from '../models/media.js'
import {Review} from '../models/review.js'


import api from '../config/api.js'
import { json } from 'express'

export {
  topGames,
  topStreams,
  addMedia,
  searchGames,
  searchOneGame,
  searchStreams,
  searchOneStream,
  removeMedia,
  searchRandomStreams,

}

function addMedia (req, res) {
  req.body.collectedBy = req.user.profile
  Profile.findById(req.user.profile)
  .then(profile => {
    Media.findOne({api_id: req.body.api_id})
    .then(media =>  {
      if (media) {
        media.collectedBy.push(req.user.profile)
        media.save()
        .then(media => {
          profile.media.push(media._id)
          profile.save()
          profile.populate('media').populate('friends').execPopulate()
          .then((profile) => {
            res.json(profile)
          })
        })
      } else {
        Media.create(req.body)
        .then(media => {
          profile.media.push(media._id)
          profile.save()
          profile.populate('media').populate('friends').execPopulate()
          .then((profile) => {
            res.json(profile)
          })
        })
      }
    })
  })
}

function removeMedia(req, res) {
  Media.findOne({ api_id: req.params.id })
  .then(media => {
    media.collectedBy.remove({ _id: req.user.profile })
    media.save()
    .then(() => {
      Profile.findById(req.user.profile)
      .then(profile => {
        let mediaIdx = profile.media.indexOf(media._id)
        profile.media.splice(mediaIdx, 1)
        profile.save()
        profile.populate('media').populate('friends').execPopulate()
        .then(()=> res.json(profile))
      })
    })
  })
}

function topGames(req, res){
  api.get(`https://api.twitch.tv/helix/games/top`)
  .then(response => {
    res.json(response.data.data)
  })
}
function topStreams(req, res){
  api.get(`https://api.twitch.tv/helix/streams`)
  .then(response => {
    res.json(response.data.data)
  })
}


function searchGames(req, res) {
  api.get(`https://api.twitch.tv/helix/search/categories?query=${req.params.query}`)
  .then(response => {
    res.json(response.data.data)
  })
}

function searchOneGame(req, res) {
  api.get(`https://api.twitch.tv/helix/games?id=${req.params.id}`)
  .then(response => {
    res.json(response.data.data)
  })
}

function searchOneStream(req, res) {
  api.get(`https://api.twitch.tv/helix/search/channels?query=${req.params.query}`)
    .then(response =>{
      response = response.data.data.filter(x=>x.broadcaster_login===req.params.query)
      response = response[0]
      Media.findOne({api_id : response.id})
      .then(media=>{
        if(media){
        Review.find({media: media._id})
        .populate('author')
        .populate('media')
        .then(reviews=>{
          response.reviews = reviews
          response._id = media._id ? media._id : ""
          res.json(response)
          console.log(response)
        })
      }else{
        res.json(response)
      }
      })
    })

}

function searchStreams(req, res){
    api.get(`https://api.twitch.tv/helix/search/channels?query=${req.params.query}`)
    .then(response =>{
      res.json(response.data)
    })
}

function searchRandomStreams(req, res){
    api.get(`https://api.twitch.tv/helix/search/channels?query=${req.params.query}&after=${req.params.page}`)
    .then(response =>{
      res.json(response.data)
    })
}

function getStream(req, res){
  searchOneStream(req.params.query).filter(x=>x.broadcaster_login === req.params.query)
}