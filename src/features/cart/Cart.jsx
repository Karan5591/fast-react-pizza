import { Link } from 'react-router-dom';
import LinkButton from '../../UI/LinkButton';
import Button from '../../UI/Button';
import CartItem from '../cart/CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart'

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  
const username= useSelector(state=>state.user.username);
const cart= useSelector(getCart)
const dispatch= useDispatch()
if(!cart.length) return <EmptyCart/>
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">Back to menu</LinkButton>
      <h2 className='mt-7 text-xl font-semibold border-b'>Your cart, {username}</h2>
<ul className='divide-y divide-stone-200'>
  {cart.map(item=><CartItem item={item} key={item.pizzaId}>

  </CartItem>)}
</ul>
      <div className='mt-6 space-x-2'>
        <Button to="/order/new" type="primary">Order Pizzas</Button>
        <Button onClick={()=>dispatch(clearCart())} type="primary"> Clear Cart</Button>
       
      </div>
    </div>
  );
}

export default Cart;
