import React from "react";

export default function Order({cart, updateAmount}) {

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
                        <td>{product.hinta * product.amount} €</td>
                        <td> Määrä: 
                            <input
                                type="number"
                                step="1"
                                onChange={e => changeAmount(e, product)}
                                value={product.amount}
                            />
                        </td>
                    </tr>
                )
            })}
            </table>
        </div>
    )
}