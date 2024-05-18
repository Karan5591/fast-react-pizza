import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../UI/Button";
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from '../cart/EmptyCart';
import store from '../../store'


function CreateOrder() {
  const [WithPriority, setWithPriority]= useState(false);
    const username= useSelector(state=>state.user.username)
const cart=useSelector(getCart)
const totalCartPrice= useSelector(getTotalCartPrice);
const priorityPrice=WithPriority? totalCartPrice*0.2 :0;
const totalPrice= totalCartPrice+priorityPrice;
if(!cart.length) return <EmptyCart/>
  return (
    <div>
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let's go!</h2>

      <Form method="POST" action="/order/new">
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" name="customer" defaultValue={username} required />
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow ">
            <input className="input w-full" type="tel" name="phone" required />
          </div>
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input className="input w-full" type="text" name="address" required />
          </div>
        </div>

        <div className="mb-12 flex gap-5 items-center">
          <input
          className="h-6 w-6 accent-yellow-400"
            type="checkbox"
            name="priority"
            id="priority"
            value={WithPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary">Order now, ₹{totalPrice}</Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
