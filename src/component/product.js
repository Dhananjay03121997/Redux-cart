import React, { Component } from 'react'

export default class product extends Component {
    render() {
        return (
            <div>
                <div className="col-lg-5 mb-3">
                <div className="card">
                    <div className="card-body">
                    <table className="table" cellPadding="10" cellSpacing="10">
                      <thead>
                        <tr><th colSpan="3">Products</th></tr>
                        <tr>
                          <th scope="col-lg-4" className = "w-100">Name</th>
                          <th scope="col">Price</th>
                          <th scope="col">Operation</th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.props.products.map((product, index)=>{
                            if(product.quantity>0){
                            return <tr key={index}>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>
                                <button className="btn btn-primary" key={product.id} >
                                Add
                                </button></td>
                            </tr>}
                            })
                        }
                      </tbody>
                    </table>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
