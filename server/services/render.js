const axios =require("axios");


// exports.homRoute = (req,res) =>{
//    // make a get request to api 
//    axios.get("http://localhost:2000/api/users").then(response => {
//     //    console.log(response.data);
//        res.render("index", {users: response.data});
//    }).catch(err => {
//        res.send(err);
//    });
// };


exports.adduser = (req,res) =>{
    res.render("adduser");
    res.end();
};


// exports.updateuser = (req,res) =>{
     
//     axios.get("http://localhost:2000/api/users", {params: {id: req.query.id}}).then(function(userData) {
//         res.render("updateuser", {user: userData.data});
//     }).catch(err => {
//         res.send(err); 
//     });
 
// };