// controllers/gameController.js
const Game = require('../models/Game');

exports.getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching games', error });
  }
};

exports.playGame = async (req, res) => {
  try {
    // Placeholder for actual game play logic
    res.status(200).json({ message: 'Game played successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error playing game', error });
  }
};
