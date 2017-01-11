var React = require('react/addons');
var action = require('./../actions/GroceryItemActionCreator.jsx')

module.exports = React.createClass({
    getInitialState:function(){
        return {input:"",price:0};
    },
    handleInputName:function(e){
        this.setState({input : e.target.value});
    },
    handlePrice:function(e){
      this.setState({price: e.target.value});
    },
    addItem:function(e){
        e.preventDefault();
        //console.log("Adding item!",this.state.input);



        action.add({
            name:this.state.input,
            price:this.state.price
        });

        this.setState({
            input:'',
            price:0,

        })
    },

    render:function(){
        return (
            <div className='grocery-addItem'>
                <form onSubmit={this.addItem}>
                   <label>Item:</label>
                    <input value={this.state.input} type='text' onChange={this.handleInputName}/>
                    <label>Price</label>
                    <input value={this.state.price} type='number'onChange={this.handlePrice}/> $<br />
                    <button> Add Item </button>
                </form>


            </div>
        )
    }
})
