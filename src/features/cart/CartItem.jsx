
import { useSelector } from 'react-redux';
import {formatCurrency} from '../../utilities/helpers'
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQuantityByid } from './cartSlice';

function CartItem( {item }) {
 
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity= useSelector(getCurrentQuantityByid(pizzaId));
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:m-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold mr-4">{formatCurrency(totalPrice)}</p>
      
      <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity}/>
       <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li> 
  );
}

export default CartItem;
