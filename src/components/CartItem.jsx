import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import {remove} from '../redux/Slices/CartSlice'

const CartItem = ({item,itemIndex}) => {

  const dispatch=useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.success("Item is removed from Cart")
  }
  return (
    <div className="flex  justify-center items-center mb-10 gap-5 mx-auto w-full">
      <div className="h-[180px] w-[250px]">
      <img src={item.image} className="h-[180px] w-[190px]"/>
      </div> 
      <div>
      <div className="w-full">
        <h1 className="text-gray-700 font-semibold text-lg  mt-1 ">{item.title}</h1>
        <h1 className="text-slate-500 mt-1 w-full ">{
          item.description.split(" ").slice(0,10).join(" ") +"..."
        }</h1>
      </div>
      <div className="flex mt-3 justify-between">
      
        <p className="text-green-600 font-semibold">${item.price}</p>
      
      <div onClick={removeFromCart} 
      className=" bg-red-300 rounded-xl py-1 px-1">
      <MdDelete className="text-red-600"/>
      </div>
      </div>
     
      </div>
      
    </div>
  )
};

export default CartItem;
