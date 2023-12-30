const router = require("express").Router();
const authController = require("../controllers/authController");

router.get("/admin/basvuru-listesi", authController.login_get);
router.post("/admin/basvuru-listesi", authController.login_post);

router.get("/admin-logout", authController.logout_get);

module.exports = router;
