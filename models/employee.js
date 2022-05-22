const mongoose = require("mongoose");
const employeesSchema=mongoose.Schema ({

    name : {type: String},
    salary : {type: Number},
    department : {type: String},
    attendance : {type: Number},
    status : {type: String},
    age : {type: Number}
})

const employeesDataModel = mongoose.model("FATA_employee",employeesSchema);

module.exports = employeesDataModel; 