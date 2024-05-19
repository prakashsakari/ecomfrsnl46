export const CartProductCart = () => {
    return (
        <div className="main">
            <div className="img-box">
                <img src="..." alt="cart-img" />
            </div>
            <div className="description pl-2">
                <p className="font-bold text-gray-950">{'HnM'}</p>
                <p className="text-sm text-gray-900">{'product.name'}</p>
                <div className="price-box flex gap-2 items-end">
                    <p className="font-bold text-sm text-gray-950">Rs. {'product.discountedPrice'}</p>
                    <p className="text-xs text-gray-900 line-through">Rs. {'product.originalPrice'}</p>
                    <p className="text-xs text-pink-900">({'product.discountPercentage'}% OFF)</p>
                </div>
                <p className="flex items-center">
                    <span className="font-bold text-sm text-gray-950">{'product.rating'}</span>
                    <span className="material-icons-outlined text-amber-500 text-sm">
                        star
                    </span>
                </p>
            </div>
            <div className="quantity">
                <p>Quantity: </p>
                <div>
                    <button
                    >
                        {" "}
                        -{" "}
                    </button>
                    <span className="count-value">{0}</span>
                    <button
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="cta">
                <button className='bg-slate-900 py-1 px-4 text-slate-50 rounded-md hover:opacity-85'>Wishlist</button>

                <button className={`bg-slate-50 py-1 px-4 text-slate-900 border border-slate-900 rounded-md hover:opacity-75`}>Remove from Cart</button>
            </div>
        </div>
    )
}