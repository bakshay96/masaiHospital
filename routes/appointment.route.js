const {Router}=require("express");
const { appointment, getAppointmentsData } = require("../controllers/appointment.controller");


const appointmentRouter =Router();

appointmentRouter.post("/appointment",appointment);
appointmentRouter.get("/appointment",getAppointmentsData);


module.exports={
    appointmentRouter
}