// Import the models to use the database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
module.exports = function(app) {

    app.get("/", function(req, res) {
        db.burger.findAll({}).then(function(data) {
            var hbsObject = {
                burgers: data
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });

    app.post("/", function(req, res) {
        db.burger.create({
            burger_name: req.body.name
        }).then(function() {
            res.redirect('/');
        });
    });

    app.post("/:id", function(req, res) {
        db.burger.update({
            'devoured': true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.redirect("/");
        });

    });
};
