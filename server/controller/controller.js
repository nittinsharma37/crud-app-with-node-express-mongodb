let Userdb = require("../model/model");

// create and save new user

exports.create = (req, res) => {
    //validate request 
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty"
        });
        return;
    }
    // new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });
    // svae user to database 
    user.save(user).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating a create operation"
        });
    });
};


// retrive and return all users / retrive a single user

exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        Userdb.findById(id).then(data => {
           if(!data){
              res.status(404).send({message: "User with id " + id + "not found"}); 
           } else{
               res.send(data);
           }
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error while retrieving data"
            });
        });
    } else {
        Userdb.find().then(user => {
            res.send(user);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred while retreiving data"
            });
        });
    }
};

//update a new user by user id 
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update cannot be empty"
        });
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {
        useFindAndModify: false
    }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `cannot update user with ${id}, Maybe user not found`
            });
        } else {
            res.send(data);
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error while updating user information "
        });
    });

};

// delete a user with specified user id 
exports.delete = (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot delete with id ${id} Maye be id is wrong `
            });
        } else {
            res.send({
                message: "User deleted successfully"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: `Could not delete user iwth id : ${id}`
        });
    });
};