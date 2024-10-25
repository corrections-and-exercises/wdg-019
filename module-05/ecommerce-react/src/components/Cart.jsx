import {useOutletContext} from 'react-router-dom';
import {addToCart, getTotal, removeFromCart} from '../utils/cartUtils.js';

export default function Cart() {
    const {cart, setCart} = useOutletContext();
    return (
        <div>
            <div className='overflow-x-auto'>
                <table className='table'>
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Total</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={item.id}>
                                <th>{index + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.description.slice(0, 20)}</td>
                                <td>{item.price}</td>
                                <td>{item.amount}</td>
                                <td>{(item.amount * item.price).toFixed(2)}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            setCart((prev) =>
                                                addToCart(prev, item)
                                            )
                                        }
                                    >
                                        Add
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            setCart((prev) =>
                                                removeFromCart(prev, item)
                                            )
                                        }
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total: {getTotal(cart)}</td>
                        </tr>
                        <tr>
                            <button onClick={() => setCart([])}>
                                Reset Cart
                            </button>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}
