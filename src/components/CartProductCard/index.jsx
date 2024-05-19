import { useCart } from "../../context/cart-context"
import { useWishlist } from "../../context/wishlist-context";
import { findProduct } from "../../utils/wishlisthelper";

export const CartProductCard = ({ product }) => {

    const { cartDispatch} = useCart();

    const { wishlist, wishlistDispatch } = useWishlist();

    const isInWishlist = findProduct(wishlist, product._id)

    const onWishlistClick = (product) => {
        wishlistDispatch({
            type: 'ADD',
            payload: product
        })
    }

    const onRemoveFromCart = () => {
        cartDispatch({
            type: 'REMOVE',
            payload: product._id
        })
    }

    return (
        <div className="drop-shadow-md bg-slate-50 flex gap-x-2 w-[500px] rounded-md px-4 py-2">
            <div className="img-box w-[250px] h-[192px]">
                <img className="w-full h-full" src={product.thumbnail} alt={product.name} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="description pl-2">
                    <p className="font-bold text-gray-950">{product.brand}</p>
                    <p className="text-sm text-gray-900">{product.name}</p>
                    <div className="price-box flex gap-2 items-end">
                        <p className="font-bold text-sm text-gray-950">Rs. {product.discountedPrice}</p>
                        <p className="text-xs text-gray-900 line-through">Rs. {product.originalPrice}</p>
                        <p className="text-xs text-pink-900">({product.discountPercentage}% OFF)</p>
                    </div>
                    <p className="flex items-center">
                        <span className="font-bold text-sm text-gray-950">{product.rating}</span>
                        <span className="material-icons-outlined text-amber-500 text-sm">
                            star
                        </span>
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    <p>Quantity: </p>
                    <div className="flex gap-2 items-center">
                        <button className="flex items-center justify-center w-[16px] h-[16px] rounded-full text-slate-50 bg-slate-900">-</button>
                        <span className="count-value">{product.quantity}</span>
                        <button className="flex items-center justify-center w-[16px] h-[16px] rounded-full text-slate-50 bg-slate-900">
                            +
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                <button disabled={isInWishlist} onClick={() => onWishlistClick(product)} className={`bg-slate-900 w-full py-1 px-4 text-slate-50 rounded-md ${isInWishlist ? 'opacity-50' : 'hover:opacity-85'}`}>{isInWishlist ? 'Wishlisted' : 'Wishlist'}</button>

                    <button onClick={() => onRemoveFromCart(product)} className={`bg-slate-50 py-1 px-4 text-slate-900 w-full border border-slate-900 rounded-md hover:opacity-75`}>Remove from Cart</button>
                </div>
            </div>

        </div>
    )
}