import { getAllProducts } from '../../api/getAllProducts';
import { Header } from '../../components/Header';
import { ProductCard } from '../../components/ProductCard';
import { useEffect, useState } from 'react';
import { SideBar } from '../../components/SideBar';
import { useFilter } from '../../context/filter-context';
import { getPriceSortedProducts, getDiscountedProducts } from '../../utils/filterhelper';
import { useWishlist } from '../../context/wishlist-context';

export const Home = () => {

    const [products, setProducts] = useState([]);
    const { sortByPrice, discount } = useFilter();
    const { wishlist } = useWishlist();

    console.log(wishlist)

    async function getData() {
        const data = await getAllProducts();
        setProducts(data);
    }

    useEffect(() => {
        getData();
    }, [])

    const sortedProductsByPrice = getPriceSortedProducts(products, sortByPrice);
    const filterByDiscount = getDiscountedProducts(sortedProductsByPrice, discount);

    return (
        <>
            <Header />
            <main className='mt-20 flex gap-4 flex-auto '>
                <SideBar />
                <div className='flex flex-wrap gap-4 ml-56 pb-10'>
                    {
                        filterByDiscount?.length > 0 ? filterByDiscount.map(product => <ProductCard key={product._id} product={product} />) : <></>
                    }
                </div>
            </main>

        </>
    )
}