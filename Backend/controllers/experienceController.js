// controllers/experienceController.js
const Experience = require('../models/Experience');

exports.createExperience = async (req, res) => {
  try {
    const newExperience = new Experience({ ...req.body, userId: req.user.id });
    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(500).json({ message: 'Error creating experience', error });
  }
};

exports.getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find({ userId: req.params.userId });
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching experiences', error });
  }
};
