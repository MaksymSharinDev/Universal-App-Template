

import {Router} from 'express'
const router = Router()
import * as controller from './controller'
import {validateExampleCreate, validateExampleUpdate } from "./validation";
import {removeFieldsSanitizer} from "../../middlewares/Sanitizers";

router.post('/', ...validateExampleCreate , controller.addExample )
router.get('/', controller.allExamples)
router.get('/:id', controller.oneExample)
router.put('/:id', ...validateExampleUpdate , controller.updateExample )
router.delete('/:id', controller.removeExample )

const exampleRouter = Router()
exampleRouter.use('/example', router)

export default exampleRouter

