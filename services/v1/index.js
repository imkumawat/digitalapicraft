const moment = require("moment");
const axios = require("axios");

exports.getRandomUsersService = async (url) => {
  const result = await Promise.all(
    Array.from(Array(10).keys()).map(async () => {
      const { data } = await axios.get(url);
      return {
        Name: Object.values(data.results[0].name).join(" "),
        DOB: moment(data.results[0].dob.date).format("YYYY-MM-DD"),
        email: data.results[0].email,
      };
    })
  );
  return result;
};

exports.getWordCountsService = async (url) => {
  const res = await axios.get(url);
  console.log(typeof res.data);
  // converting text file into single string & splitting at spaces
  const splittedWords = JSON.stringify(res.data).split(" ");
  console.log(splittedWords.length);
  const wordCounts = {};
  splittedWords.forEach((word) => {
    if (word.length) {
      if (word in wordCounts) {
        wordCounts[word] += 1;
      } else {
        wordCounts[word] = 1;
      }
    }
  });
  // console.log(wordCounts);
  const sordtedWords = Object.keys(wordCounts).sort();
  const result = {};
  sordtedWords.slice(0, 10).forEach((key) => {
    result[key] = wordCounts[key];
  });
  console.log("Result:\n", result);
  return "ok";
};
