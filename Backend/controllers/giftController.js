// controllers/giftController.js
const Gift = require('../models/Gift');

exports.createGift = async (req, res) => {
  try {
    const newGift = new Gift({ ...req.body, userId: req.user.id });
    await newGift.save();
    res.status(201).json(newGift);
  } catch (error) {
    res.status(500).json({ message: 'Error creating gift', error });
  }
};

exports.getGifts = async (req, res) => {
  try {
    const gifts = await Gift.find({ userId: req.params.userId });
    res.status(200).json(gifts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching gifts', error });
  }
};
