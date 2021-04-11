import React from 'react';
import Product from './component/product';
import data from './data.json'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products : data.product
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <div className="contain">
          <div className="products"> 
           <Product products={this.state.products}></Product>
          </div>
          <div className="Cart"> CART</div>
        </div>
      </div>
    );
  }
}
export default App;
