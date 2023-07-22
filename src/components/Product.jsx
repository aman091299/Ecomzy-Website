import { useDispatch,useSelector } from "react-redux";
import { remove ,add} from "../redux/Slices/CartSlice";
import { toast } from 'react-hot-toast';

const Product = ({post}) => {

  const {cart}=useSelector((state)=>state );
  const dispatch=useDispatch();
  
  const addToCart=()=>{
    dispatch(add(post))
    toast.success("item added to cart")
  }
  const removeFromCart=()=>{
    dispatch(remove(post.id))
    toast.error("item remove from cart")
  }
  return(

     <div className=" flex flex-col justify-center items-center  hover:scale-110 transition duration-300 ease-in shadow-lg hover:bg-white gap-3 p-4 mt-10 ml-5 rounded-xl max-w-3xl mx-auto">
     <div>
      <p className="text-gray-700 font-semibold text-lg w-40 mt-1 truncate">{post.title}</p>
    </div>
    <div>
      <p className="w-40 text-gray-400 font-normal text-[10px] ">{post.description.split(" ").slice(0,10).join(" ") + " ..."}</p>
    </div>
    <div className="h-[180px]">
      <img src={post.image} className="w-full h-full"/>
    </div>
    <div className="flex  gap-12 items-center w-full mt-5 justify-center"> 
      <p className=" text-green-600 font-semibold ">
        ${post.price}
      </p>
      
      {
       
        cart.some((p)=>p.id == post.id)?
        (<button onClick={removeFromCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-4 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
          remove Item
        </button>):
        (
        <button onClick={addToCart} 
        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] py-1 px-4 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
          Add to Cart 
        </button>
        )
      } 
    
    </div>
     </div>
  

  )
};

export default Product;
