import React from "react";

export default function Order({cart, updateAmount, removeFromCart}) {

    function changeAmount(e, product) {
        updateAmount(e.target.value, product)
    }

    return (
        <div>
            <h3>Ostoskori</h3>
            <table>
            { cart.map((product)=> {
                return ( 
                    <tr>
                        <td>{product.tuotenimi}</td>
                        <td>{(product.hinta * product.amount).toFixed(2)} €</td>
                        <td> Määrä: 
                            <input
                                type="number"
                                step="1"
                                onChange={e => changeAmount(e, product)}
                                value={product.amount}
                            />
                        </td>
                        <td><a onClick={() => removeFromCart(product)}>Poista</a></td>
                    </tr>
                )
            })}
            </table>
        </div>
    )
}