const express = require("express");
const router = express.Router();
const employeesDataModel = require("../models/employee")

/*  ---------------------------------------------  */
/*                  Add new employees              */
/*  ---------------------------------------------  */

router.post("/add-new-employee",async(req,res) =>{

    new employeesDataModel({
//      MODEL   :BODY
        name        :req.body.name,
        salary      :req.body.salary,
        department  :req.body.department,
        attendence  :req.body.attendence,
        status      :req.body.status,
        age         :req.body.age,

        name1        :req.body.name,
        salary1      :req.body.salary,
        department1  :req.body.department,
        attendence1  :req.body.attendence,
        status1      :req.body.status,
        age1         :req.body.age
    })
    .save()


    res.json({data : req.body})
})


/*  ---------------------------------------------  */
/*                    get data                     */
/*  ---------------------------------------------  */
router.get("/", (req, res) => {
    res.send("Welcome to Node & Mongo Tutorial!!!")
})


module.exports = router;