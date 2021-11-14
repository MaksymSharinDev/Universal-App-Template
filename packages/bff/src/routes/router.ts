import {Router} from 'express'

const router = Router()
import exampleRoutes from './example/routes'


router.use('/v1',
    exampleRoutes,
)

export default router