const express = require('express');
const router = express.Router();

const cusController = require('../../components/admin/mainPageController');


router.get('/', cusController.get_HomePage);

router.get('/:slug', cusController.get_Pages);
module.exports = router;