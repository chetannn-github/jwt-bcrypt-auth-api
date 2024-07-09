import { Router } from "express";
import { browse, login, logout, signUp } from "../Controller/auth-controller.js";
import { isLoggedIn } from "../utils/isLoggedIn.js";

const router = Router();
router.post("/login",login);

router.post("/signup",signUp);
router.post("/logout",logout);
router.get("/browse",isLoggedIn,browse);
export default router;