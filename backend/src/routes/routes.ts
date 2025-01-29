import { Router, Request, Response } from "express";
import UserController from "../controllers/userController";


import ReserveController from "../controllers/ReserveController";
import isPremium from "../middlewares/IsPremiumMiddleware";
import { ReserveValidator, UserValidator } from "../config/validator";
import { ResultValidator } from "../middlewares/ResultValidator";
import { photoUpload } from "../config/uploader";

const router = Router();



router.post(
    "/user",UserValidator.validateUser("create"),
    ResultValidator.validateResult,
    UserController.createUser
);

router.get("/user", UserController.getUser);
router.get("/users", UserController.getUsers);
router.delete("/users",UserController.deleteAllUsers)

router.post("/user/img",photoUpload.single("image"))

router.post("/reserve",ReserveValidator.validateReserve("create"),
ResultValidator.validateResult
,isPremium,ReserveController.createReserve)
router.get("/reserves",ReserveController.getReservers)



export default router;
