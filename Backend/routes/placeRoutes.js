const express = require('express');
const { getPlaces, getPlace } = require('../controllers/placeController');

const router = express.Router();

router.get('/', getPlaces);
router.get('/:placeId', getPlace);

module.exports = router;
