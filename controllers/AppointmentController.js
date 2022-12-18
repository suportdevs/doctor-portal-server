const Appointment = require("../models/Appointment");

async function storeAppointment(req, res){
    try{
        console.log(req.body);
        const appointment = await new Appointment(req.body);
        await appointment.save();
        res.status(200).json({message: 'sucess'})
    } catch(err) {
        res.status(500).json({message: 'Something went wrong! ' + err})
    }
}

module.exports = {
    storeAppointment
}