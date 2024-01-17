const router = require('express').Router();
const { setKeywordAndCount, getKeywordAndCount  } = require('../controllers/keyword');

router.post("/keyword", setKeywordAndCount);
router.get("/keyword", getKeywordAndCount);

module.exports = router;