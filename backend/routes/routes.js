const { createUser, getUsers, getUser, getReport, getReports, createReport } = require('../controllers/user');

const router = require('express').Router();

router.post('/createUser',createUser);
router.get('/getUsers',getUsers);
router.get('/getUser/:phone',getUser);
router.get('/getReports',getReports);
router.get('/getReport/:phone',getReport);
router.post('/createReport',createReport);

module.exports = router;