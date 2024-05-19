import { useLocation, useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/wishlist-context";
import { findProduct } from "../../utils/wishlisthelper";
import { useCart } from "../../context/cart-context";

export const ProductCard = ({ product }) => {

    const { wishlistDispatch, wishlist } = useWishlist();
    const { cart } = useCart();
    const { cartDispatch } = useCart();
    const location = useLocation();
    const navigate = useNavigate();

    const onWishlistClick = (product, type) => {
        if (type === 'add'){
            wishlistDispatch({
                type: 'ADD',
                payload: product
            })
        }else if (type === 'remove'){
            wishlistDispatch({
                type: 'REMOVE',
                payload: product._id
            })
        }
        
    }

    const onAddToCartClick = (product) => {
        if (isInCart){
            navigate('/cart')
        }else{
            cartDispatch({
                type: 'ADD',
                payload: product
            })
        }
        
    }  

    const isInWishlist = findProduct(wishlist, product._id);
    const isInCart = findProduct(cart, product._id)

    return (
        <div className="w-56 border drop-shadow-md rounded-lg bg-gray-50 flex flex-col gap-2 pb-1.5">
            <div className="w-56 h-40">
                <img className="w-full h-full rounded-t-lg" src={product.thumbnail} alt={product.name} />
            </div>
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
            <div className="px-2 flex flex-col gap-1 mt-auto">
                {
                    location.pathname === '/wishlist' ? <button className="bg-slate-900 py-1 px-4 text-slate-50 rounded-md hover:opacity-85" onClick={() => onWishlistClick(product, 'remove')}>Remove from Wishlist</button> : (
                        <button disabled={isInWishlist} onClick={() => onWishlistClick(product, 'add')} className={`bg-slate-900 py-1 px-4 text-slate-50 rounded-md ${isInWishlist ? 'opacity-50' : 'hover:opacity-85'}`}>{isInWishlist ? 'Wishlisted' : 'Wishlist'}</button>
                    ) 
                }


                <button onClick={() => onAddToCartClick(product)} className={`bg-slate-50 py-1 ${isInWishlist ? 'px-2' : 'px-4'} text-slate-900 border border-slate-900 rounded-md hover:opacity-75`}>{isInCart ? 'Go To Cart' : 'Add To Cart'}</button>
            </div>
        </div>
    )
}

export default ProductCard;