const connection = require('../config/db')

exports.getUser = (req, res, next) => {
    var sql = `select password from user where email_id="${req.params.emailId}"`;
    try{
    connection.query(sql, function (err, result){
        if(!err){
        console.log(sql);
        console.log(result);

        return res.status(200).json({
            success: result.length,
            data: result[0] != null ? result[0].password : "NoRecords"
          });
        }
        
        else{
            console.log(err);
        }
    })
}
catch (e) {
    console.log(e);
}
}
exports.setOnline = (req, res, next) => {

    var sql = `insert into status values("${req.params.emailId}", true, now()) 
    on duplicate key update online=true, time_stamp=now()`;
    connection.query(sql, function (err, result){
        console.log(sql);
        if(!err){
        console.log("Status Updated");
        return res.status(200).json({
            success: true
          });
        }
        else{
            console.log(err);
        }
    })
}