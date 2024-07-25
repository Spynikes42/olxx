const authController = require("../controllers/auth.controller")

const router = require("express").Router()



router
    .post("/register-admin", authController.registerAdmin)
    .post("/login-admin", authController.loginAdmin)
    .post("/verify-admin-otp", authController.verifyOTP)
    .post("/logout-admin", authController.logoutAdmin)

    .post("/login-mobile-user", authController.loginUser)
    .post("/register-mobile-user", authController.registerUser)
    .post("/logout-mobile-user", authController.loginUser)


module.exports = router
