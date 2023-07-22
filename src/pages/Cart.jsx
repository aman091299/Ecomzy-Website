
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {

  const {cart}=useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);
 
  useEffect(()=>{
  
   setTotalAmount(cart.reduce((acc,curr)=>acc + curr.price,0))
  },[cart])
  return (
<div>
  {
    cart.length > 0 ? 

    (<div  className="flex flex-col  md:flex-row gap-6 mt-3 w-full justify-center   p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]  ">

      <div className="w-full mx-auto ml-8" >
    {
       cart.map((item,index)=>(
      <CartItem key={item.id} item={item} itemIndex={index}/>
     ))
      
    }
    </div> 
    <div className="flex flex-col  w-full space-y-2 mt-10">
    <div className="text-green-700 font-semibold text-[20px] ">
      Your Cart
    </div>
    <div className="text-green-700 font-semibold text-[30px] ">
      Summary
    </div>
    <p>
    
        Total Item:
        <span >{cart.length}</span>
      
    </p>
    <div className="flex flex-col space-y-2">
   <p >Total Amount :<span className="text-[16px] font-semibold text-black">${totalAmount}</span></p>
   <button className="flex justify-center items-center w-[300px] rounded-sm  py-1 bg-green-700 text-white">
     <span > Checkout Now </span>
    </button>
    </div>
  </div> 
  </div>
    ):
    (
      <div className="flex flex-col gap-4 justify-center items-center h-screen">
        <h1 className="text-lg  text-slate-400">Cart is empty</h1>
        <Link to="/">
        <button className="text-3xl font-semibold text-green-400">
          Shop Now
        </button>
        </Link>
      </div>
    )
  }
 
</div>
  )
};

export default Cart;
