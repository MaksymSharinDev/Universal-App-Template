import express from 'express'
const router = express.Router()
import serviceRouter from './example/service.js'


router.use( '/v1/service', serviceRouter)
/*
router.use('/service', serviceRouter)
*/


export default router