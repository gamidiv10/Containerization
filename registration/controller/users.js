const connection = require('../config/db')

exports.registerUser = (req, res, next) => {

    console.log(req.body)
    var sql = `INSERT INTO user VALUES ("${req.body.emailId}", "${req.body.password}", "${req.body.firstName}", "${req.body.lastName}")`;
    connection.query(sql, function (err, result){
        if(!err){
        console.log("Inserted");
        return res.status(200).json({
            success: true
          });
        }
        else{
            console.log(err);
        }
    })

}