const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./homeRoutes.js');
const mainRoutes = require('./mainRoutes.js');

router.use('/', homeRoutes);
router.use('/dashboard', mainRoutes);
router.use('/api', apiRoutes);

module.exports = router;
