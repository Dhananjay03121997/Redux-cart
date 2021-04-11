import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <div className="lg:w-600">
                <div className="max-w-sm rounded overflow-hidden bg-white shadow-lg">
                    <div className=" px-6 py-4">
                    <table className="table" cellPadding="10" cellSpacing="5">
                      <thead>
                        <tr>
                          <th colSpan="3">Basket 
                          <label className="btn-xs btn-outline-primary disabled ml-2 mr-2 border p-2">
                            {this.props.cartItems.length}
                          </label>
                          </th></tr>
                        <tr>
                          <th className="lg:w-600">Name</th>
                          <th >Price</th>
                          <th >Operation</th>
                        </tr>
                      </thead>
                      <tbody>
                          {this.props.cartItems.map((item, index)=>{
                            return<tr key={index}>
                              <td >{item.name}</td>
                              <td >${item.price}</td>
                             
                              <td className = "col-lg-4 text-right">
                                <button name="less" className="btn-outline-primary btn" value={index}  disabled={item.requirement > 1}>-</button>
                                <input className="text-center" type="text" style={{width:"30px"}} value={item.requirement}/>
                                <button name="add" className="btn btn-outline-primary" value={index}  disabled={item.requirement == item.quantity}>+</button>
                                </td>
                               
                            </tr>
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
