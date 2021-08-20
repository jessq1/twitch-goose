import { Router } from 'express'
import * as mediaCtrl from '../controllers/media.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router()


router.use(decodeUserFromToken)
router.get('/search/games/:query',checkAuth,   mediaCtrl.searchGames)
router.get('/search/streams/:query',checkAuth,  mediaCtrl.searchStreams)
router.get('/topStreams', mediaCtrl.topStreams)
router.get('/topGames', mediaCtrl.topGames)
router.get('/searchOneGame/:id', checkAuth, mediaCtrl.searchOneGame)
router.get('/searchOneStream/:query/:id',checkAuth, mediaCtrl.searchOneStream)
router.get('/searchRandomStreams/:query/:page',checkAuth, mediaCtrl.searchRandomStreams)
router.post('/addMedia', checkAuth, mediaCtrl.addMedia)
router.delete('/removeMedia/:id', checkAuth, mediaCtrl.removeMedia)