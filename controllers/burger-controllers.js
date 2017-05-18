var express = require("express");

var router = express.Router();

var burger = require("/models/burger.js");

router.get("/", function(req, res)
{
	burger.selectAll(function(data)
	{
		var hbsObject =
		{
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/",function(req,res)
{
	//console.log(req.body);
	burger.insertOne(
		[
		"buger_name"
		],
		[
		req.body.burger_name
		], function()
		{
			res.redirect("/");
		});
	});

router.put("/:id", function(req, res)
{
	var id = "id =" + req.params.id;

	//console.log("condition:", id);
	burger.updateOne(
	{
		devoured: true
	}, id, function()
	{
		res.redirect("/");
	});
});

module.exports = router;