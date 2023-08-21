const { AppointmentModel } = require("../models/appointment.model");

// post appointment 
const appointment = async(req,res)=>{
    const payload=AppointmentModel(req.body)
    try {
        const appointment=new AppointmentModel(payload);
        await appointment.save();
        res.status(200).send({"msg":"Data submit successfully "})
    } catch (error) {
        res.status(400).send({"msg":"Wrong credentials "})
    }
}

//get appointments data
const getAppointmentsData = async(req,res)=>{
    
    try {
        const data=AppointmentModel.find();
        
       
        res.status(200).send({"msg":"Data successfully recived ",data})
    } catch (error) {
        res.status(400).send({"msg":"Wrong credentials "})
    }
}



module.exports={
    appointment,
    getAppointmentsData
}