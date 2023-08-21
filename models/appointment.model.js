// - Name
// - Image URL
// - Specialization (Select tag with **Cardiologist, Dermatologist, Pediatrician, Psychiatrist** as options)
// - Experience
// - Location
// - Date (Appointment creation date, populate from backend)
// - Slots (Number of slots available for the day)
// - Fee
// - On form submit, store data in backend server on API “**/appointments**”.

const {Schema,model, default:mongoose}=require("mongoose");

const AppointmentSchema= new Schema(
    {
        name:String,
        image:String,
        specialization:{type:String, default:"Cardiologist",enum:["Cardiologist", "Dermatologist", "Pediatrician", "Psychiatrist"]},
        experience:Number,
        location:String,
        date:{type:String},
        slots:Number,
        fee:Number

    })


    const AppointmentModel=model("doctore",AppointmentSchema)

    module.exports={
        AppointmentModel
    }