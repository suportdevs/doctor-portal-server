const { appointmentByDate } = require('../controllers/AppointmentController');

const router = require('express').Router();

router.get('/appointment', (req, res) => {
    res.status(200).json("dashboard");
});


router.post('/appointment_by_date', appointmentByDate);

module.exports = router;