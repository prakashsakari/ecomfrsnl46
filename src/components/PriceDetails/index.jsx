import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context"

export const PriceDetails = () => {

    const APIKEY = 'rzp_test_VSdp7X3K39GwBK';

    const { cart, cartDispatch } = useCart();
    const navigate = useNavigate();


    const discountedItemAmount = cart.reduce((acc, cur) => acc + cur.discountedPrice, 0);
    const originalItemAmount = cart.reduce((acc, cur) => acc + cur.originalPrice, 0)

    const loadScript = (src) => {
        return new Promise(resolve => {
            const script = document.createElement("script");
            script.src= src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };
  
    const displayRazorpay = async () => {
        const response = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  
        if(!response){
          console.log('no response')
        }
  
        const options = {
          key: APIKEY,
          amount: (discountedItemAmount + 100) * 100,
          curreny: "INR",
          name: "Shopit by Prakash",
          description: "Thank you for shopping with us.",
          image: "https://therightfit.netlify.app/assets/The%20Right%20Fit-logos.jpeg",
  
          handler: ({payment_id}) => {
              cartDispatch({type: "CLEAR"});
              navigate("/")
          }
        }
  
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <div className="w-[300px] bg-slate-50 drop-shadow-md">
            <p className="font-bold text-md">Price Details</p>
            <div className="flex justify-between items-center">
                <p>Price ({cart.length} items)</p>
                <p>Rs. {originalItemAmount}</p>
            </div>
            <div className="flex justify-between items-center">
                <p>Discount </p>
                <p>Rs. {originalItemAmount - discountedItemAmount}</p>
            </div>
            <div className="flex justify-between items-center">
                <p>Delivery Charge</p>
                <p>Rs. 100</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-bold">Total Amount</p>
                <p>Rs. {discountedItemAmount + 100}</p>
            </div>
            <div>
                <button className="bg-slate-900 text-slate-50 rounded-md w-full" onClick={displayRazorpay}>Place Order</button>
            </div>
        </div>
    )
}