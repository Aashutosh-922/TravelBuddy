// controllers/preferenceController.js
const TravelPreferences = require('../models/TravelPreferences');

exports.createPreferences = async (req, res) => {
  try {
    const newPreferences = new TravelPreferences({ ...req.body, userId: req.user.id });
    await newPreferences.save();
    res.status(201).json(newPreferences);
  } catch (error) {
    res.status(500).json({ message: 'Error creating preferences', error });
  }
};

exports.getPreferences = async (req, res) => {
  try {
    const preferences = await TravelPreferences.findOne({ userId: req.params.userId });
    res.status(200).json(preferences);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching preferences', error });
  }
};
