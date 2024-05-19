import { Header } from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { useWishlist } from '../../context/wishlist-context';

export const Wishlist = () => {

    const { wishlist } = useWishlist();

    return (
        <div>
            <Header />
            <main className='pt-20 '>
                <h2 className='text-center font-bold test-slate-900 text-xl'>Your Wishlist</h2>
                <div className='flex flex-wrap gap-4 ml-20 mt-6'>
                    {
                        wishlist?.length > 0 ? wishlist.map(product => <ProductCard product={product} key={product._id} />) : <h2>No items found</h2>
                    }
                </div>
            </main>
        </div>
    )
}