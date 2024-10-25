import useProducts from '../hooks/useProducts.js';
import {useOutletContext, useParams} from 'react-router-dom';
import {addToCart} from '../utils/cartUtils.js';
export default function Products() {
    const {category} = useParams();

    const {setCart} = useOutletContext();

    const path = category ? `products/category/${category}` : 'products';

    const {error, loading, data: products} = useProducts(path);

    if (loading) return <p>Loading....</p>;
    return (
        <div className='flex justify-center flex-wrap gap-4 pt-4'>
            {products?.map((product) => (
                <div
                    key={product.id}
                    className='card bg-base-100 w-96 shadow-xl'
                >
                    <figure className='px-10 pt-10 h-44 object-contain'>
                        <img
                            src={product.image}
                            alt={product.title}
                            className='rounded-xl'
                        />
                    </figure>
                    <div className='card-body items-center text-center'>
                        <h2 className='card-title'>{product.title}!</h2>
                        <p>{product.description.slice(0, 50)}...</p>
                        <p>{product.price} €</p>
                        <div className='card-actions'>
                            <button
                                onClick={() =>
                                    setCart((prev) => addToCart(prev, product))
                                }
                                className='btn btn-primary'
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
