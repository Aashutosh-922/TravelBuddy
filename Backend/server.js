const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const preferenceRoutes = require('./routes/preferenceRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
const placeRoutes = require('./routes/placeRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const postRoutes = require('./routes/postRoutes');
const chatRoutes = require('./routes/chatRoutes');
const giftRoutes = require('./routes/giftRoutes');
const gameRoutes = require('./routes/gameRoutes');
const filterRoutes = require('./routes/filterRoutes');

const app = express();
app.use(express.json());


connectDB();

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/preferences', preferenceRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/places', placeRoutes);
app.use('/api/experiences', experienceRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/gifts', giftRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/filters', filterRoutes);



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
