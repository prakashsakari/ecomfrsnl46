import { CartProductCard } from "../../components/CartProductCard";
import { Header } from "../../components/Header"
import { useCart } from "../../context/cart-context"
import { PriceDetails } from "../../components/PriceDetails";

export const Cart = () => {

    const { cart } = useCart();

    return (
        <div>
            <Header />
            <main className='pt-20 '>
                <h2 className='text-center font-bold test-slate-900 text-xl'>Your Cart</h2>
                {
                    cart?.length > 0 ? (
                        <div className="flex gap-10 mt-6 relative">
                            <div className='flex flex-col gap-4 ml-20'>
                                {
                                    cart.map(product => <CartProductCard product={product} key={product._id} />)
                                }
                            </div>
                            <div className="fixed right-[250px]">
                                <PriceDetails />
                            </div>
                        </div>
                    ) : <h2>No items found in your cart</h2>
                }


            </main>
        </div>
    )
}