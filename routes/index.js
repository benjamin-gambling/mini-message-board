var express = require("express");
var router = express.Router();

// ADDED DEFAULT MESSAGES
const messages = [
  {
    text:
      "Hi there!, welcome to my mini message board that i created during my time learning NodeJS",
    user: "Benjamin Gambling",
    added: new Date(),
  },
  {
    text:
      "Feel free to play around and see how it works, any questions about this app and how it was made feel free to contact me from the info on my persoanl site found through my GitHub page",
    user: "Benjamin Gambling",
    added: new Date(),
  },
  {
    text: "Have a great day!",
    user: "Benjamin Gambling",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Expressanger", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form", { title: "Add a Message" });
});

router.post("/new", (req, res, next) => {
  const body = req.body;
  const newMsg = { text: body.text, user: body.user, added: new Date() };
  messages.push(newMsg);
  res.redirect("/");
});

module.exports = router;
