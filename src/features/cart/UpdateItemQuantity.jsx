import { useDispatch } from "react-redux"
import Button from "../../UI/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice"
function UpdateItemQuantity({pizzaId, currentQuantity}) {

    const dispatch= useDispatch()
    return (
        <div className="flex gap-1 items-center">
            <Button type='round' onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            <span>{currentQuantity}</span>
            <Button type='round' onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity
