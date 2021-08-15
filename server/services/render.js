

exports.homRoute = (req,res) =>{
    res.render("index");
    res.end();
};


exports.adduser = (req,res) =>{
    res.render("adduser");
    res.end();
};


exports.updateuser = (req,res) =>{
     
    res.render("updateuser");
    res.end();
 
};