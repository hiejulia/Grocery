var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItem.js');

mongoose.connect('mongodb://localhost/grocery',function(){
    console.log("connected.");

    mongoose.connection.db.dropDatabase();

    var items = [{
        name:"Fish",
        purchased:true,
        price:"10"
    },{
        name:"Waffles",
        purchased:true,
        price:"20"
    },{
        name:"Rice",
        purchased:true,
        price:"8"
    },{
        name:"Bubble tea",
        price:"7"
    }];

    items.forEach(function(item){
        new GroceryItem(item).save();
    })
})
