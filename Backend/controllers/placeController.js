// controllers/placeController.js
const Place = require('../models/Place');

exports.getPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching places', error });
  }
};

exports.getPlace = async (req, res) => {
  try {
    const place = await Place.findById(req.params.placeId);
    res.status(200).json(place);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching place', error });
  }
};
