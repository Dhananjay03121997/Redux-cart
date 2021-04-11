import React from 'react';
import Cart from './component/Cart';
import Product from './component/product';
import data from './data.json'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products : data.product,
      cartItems : []
    };
  }
  addToCart = (product, e) =>{
    console.log(e);
    // console.log(product, this.state.products);
    const cartItems = this.state.cartItems.slice();
    cartItems.push({...product, count: 1});
    this.setState({cartItems})
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <div className="contain">
          <div className="products"> 
           <Product products={this.state.products} 
           addToCart={this.addToCart}></Product>
          </div>
          <div className="Cart"> 
           <Cart cartItems={this.state.cartItems}></Cart>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
