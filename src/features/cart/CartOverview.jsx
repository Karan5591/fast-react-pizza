import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity= useSelector(getTotalCartQuantity);
  const totalCartPrice= useSelector(getTotalCartPrice)
  if(!totalCartQuantity) return null;
    return (
    <div className="bg-stone-800 p-4 uppercase 
    text-stone-200 px-4 py-4 sm:px-6 text-sm 
    md:text-base flex items-center justify-between">
      <p className=" space-x-4 font-semibold-300
      sm:space-x-6 text-stone-300">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>

      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
