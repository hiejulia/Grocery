var React = require('react/addons');
var GroceryItem = require('./GroceryItem.jsx');
var GroceryListAddItem = require('./GroceryListAddItem.jsx');

module.exports = React.createClass({

    getInitialState:function(){
        return {sum:0};
    },

    //sum
    sum:function(e){
        e.preventDefault();
        var sumPrice =0;
        for(var i=0;i<this.props.item.length;i++){
        if(this.props.item[i].purchased){
            sumPrice+=parseInt(this.props.item[i].price);
        }
        }
        this.setState({
            sum:sumPrice
        })

    },

    render:function(){
        return (

                <div>
                   <button onClick={this.sum}>Sum</button>

                    <h3>{this.state.sum} $ </h3>
                </div>


        )
    }
})
