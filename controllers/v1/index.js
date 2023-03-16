const catchAsync = require("../../utils/catchAsync");
const {
  getRandomUsersService,
  getWordCountsService,
} = require("../../services/v1/index");

const URL1 = "https://randomuser.me/api/";
const URL2 = "http://norvig.com/big.txt";

exports.getRandomUsersController = catchAsync(async (req, res, next) => {
  const result = await getRandomUsersService(URL1);
  return res.send(result);
});

exports.getWordCountsController = catchAsync(async (req, res, next) => {
  const result = await getWordCountsService(URL2);
  return res.send(result);
});
