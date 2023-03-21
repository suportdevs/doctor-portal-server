// external imports
const router = require('express').Router();

// internal imports
const {storeAppointment} = require("../controllers/AppointmentController");

router.get('/hi', (req, res) => {
    res.json('hello server');
});

router.post('/', storeAppointment);

module.exports = router;