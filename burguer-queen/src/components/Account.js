import React, {Component} from 'react';
import '../App.css';

export const Account = (props) => {
    return(
        <div className="col-md-4 account-background" className="account">
             <h4> Mesa No {props.numberTable}</h4>

            <table className="table table-striped">
                <thead>
                    <tr >
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col"><i class="fas fa-trash-alt"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {props.orders.map((item, index) =>
                    <tr>
                        <td>{item.item}</td>
                        <td>${item.price}</td>
                        <td><button className="btn btn-sm"
                                onClick={()=> props.removeOrder(index)}>
                            <i className="fas fa-trash-alt"></i>    
                            </button>
                        </td>
                    </tr>
                    )}
                    <tr>
                        <td className="h5">  TOTAL: </td>
                        <td className="h5"> ${props.total}</td>
                        <td> <button type="button"
                            className="bt btn-success">
                            Enviar a Cocina
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
           


            <div>

            </div>

        </div>
    );
}

export default Account;
