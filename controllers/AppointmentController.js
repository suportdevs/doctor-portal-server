const Appointment = require("../models/Appointment");

async function storeAppointment(req, res){
    try{
        console.log(req.body)
        const appointment = await new Appointment(req.body);
        await appointment.save();
        res.status(200).json({message: 'sucess'})
    } catch(err) {
        res.status(500).json({message: 'Something went wrong! ' + err})
    }
}

async function appointmentByDate(req, res){
    try{
        console.log(req.body);
        const data = await Appointment.find({date: req.body.date});
        res.status(200).send(data);
    }catch(err){
        res.status(500).send({message: "Something went wrong.!" + err});
    }
}

module.exports = {
    storeAppointment,
    appointmentByDate
}