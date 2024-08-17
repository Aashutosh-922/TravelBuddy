// controllers/filterController.js
const ProfileFilter = require('../models/ProfileFilter');

exports.createFilter = async (req, res) => {
  try {
    const newFilter = new ProfileFilter({ ...req.body, userId: req.user.id });
    await newFilter.save();
    res.status(201).json(newFilter);
  } catch (error) {
    res.status(500).json({ message: 'Error creating filter', error });
  }
};

exports.getFilters = async (req, res) => {
  try {
    const filters = await ProfileFilter.findOne({ userId: req.params.userId });
    res.status(200).json(filters);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching filters', error });
  }
};
