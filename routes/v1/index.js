const app = require("express");

const router = app.Router();

const {
  getRandomUsersController,
  getWordCountsController,
} = require("../../controllers/v1/index");

router.route("/get-random-users").get(getRandomUsersController);
router.route("/get-word-counts").get(getWordCountsController);

module.exports = router;
