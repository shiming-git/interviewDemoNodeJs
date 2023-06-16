var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource111');
});


router.get("/tabler", function (req, res, next) {
  let list = [
    {
      id: "1",
      programme: "Plus 专业版",
      describe: "仅用干教学用途，不支持大量商用和其他非教学用途",
    },
    {
      id: "2",
      programme: "Plus 旗舰版",
      describe: "仅用干教学用途，不支持大量商用和其他非教学用途",
    },
  ]
  res.send(list)
})


module.exports = router;
