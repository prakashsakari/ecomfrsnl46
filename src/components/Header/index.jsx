import { useWishlist } from "../../context/wishlist-context";
import { useNavigate } from "react-router-dom";

export const Header = () => {

    const { wishlist } = useWishlist();

    const navigate = useNavigate();

    const onWishlistClick = () => {
        navigate('/wishlist')
    }

    const onShopitClick = () => {
        navigate('/');
    }

    return (
        <header className="flex items-center bg-slate-100 border border-slate-900 fixed top-0 left-0 w-screen z-20 px-10 pt-4 pb-3">
            <h1 className="font-bold text-xl text-slate-950 hover:cursor-pointer" onClick={onShopitClick}>Shopit</h1>
            <nav className="ml-auto flex gap-8 items-center pr-10">
                <button className="relative" onClick={onWishlistClick}>
                    <span class="material-icons-outlined">
                        favorite_border
                    </span>
                    {
                        wishlist?.length > 0 && (
                            <div className="absolute top-[-8px] right-[-8px] text-slate-50 bg-slate-900 rounded-full h-4 w-4 text-xs">{wishlist?.length}</div>
                        )
                    }

                </button>
                <button><span class="material-icons-outlined">
                    shopping_cart
                </span></button>
            </nav>
        </header>
    )
}
