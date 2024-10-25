import useProducts from '../hooks/useProducts.js';
import Products from './Products.jsx';
import {Link} from 'react-router-dom';

export default function Home() {
    const {
        error,
        loading,
        data: categories,
    } = useProducts('products/categories');
    return (
        <div className='pt-4'>
            <div className='flex justify-center gap-4 mb-4'>
                {categories?.map((c) => (
                    <Link key={c} to={`products/${c}`}>
                        {c}
                    </Link>
                ))}
            </div>
            <Products />
        </div>
    );
}
