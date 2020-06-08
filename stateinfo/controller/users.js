const connection = require('../config/db')

exports.getUsers = (req, res, next) => {
    var sql = `select email_id from status where online = true`;
    try{
    connection.query(sql, function (err, result){
        if(!err){
        console.log(result);
        return res.status(200).json({
            success: true,
            data: result
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