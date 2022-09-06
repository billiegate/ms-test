import * as express from 'express';
import { UserController } from '../controllers';
import { isAuth } from '../middlewares';
import { UserValidation, validate } from '../validators';
const router = express.Router();


router.get('/users', isAuth, validate( UserValidation ), UserController.fetch);
router.post('/users', isAuth, validate( UserValidation ), UserController.create);

router.all("*", (req, res) => {
    res.status(404).send({
        code: "94",
        message: "Route not found",
        data: req.body
    })
});

export {router as apiRoute}