const router = require('express').Router();
const newRoutes = require('./noteRoutes');
router.use(newRoutes);

module.exports= router;