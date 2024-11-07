const express = require('express');

const router = express.Router();

router.get('/',
    ({res}) => res.send('books endpoint')
)

module.exports = router;