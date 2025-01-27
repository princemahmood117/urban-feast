import { useContext } from "react";
import toast from "react-hot-toast";
import { Navigate, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Components/Auth/AuthProvider";
import axios from "axios";

const MenuDetails = () => {
  const menu = useLoaderData();
  const { image, name, reciepe, price, _id, category } = menu;
  const {user} = useContext(AuthContext)
  console.log(menu);
 
  const handleOrderSubmit = async(e) => {
    e.preventDefault()

        const foodId = _id;
        const price = parseInt(form.price.value);
        const email = user?.email;
        const status = 'Pending'
 
      
      const form = e.target;

      // data for bids
      const foodData = {
          foodId,
          name,
          price,
          reciepe,
          image, 
          category,
          email, 
          status,
      }
      console.table(foodData);

      try {
        const {data} = await axios.post(`/order`, foodData)
        console.log(data); 
        toast.success('Item ordered successfully')
        Navigate('/menu')
      }

      catch(error) {
        toast.error(error);
        form.reset()
      }
      
  }
  return (
    <div>
      <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 ">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500 dark:bg-gray-500 mt-20"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="md:text-2xl text-xl font-semibold  group-hover:underline group-focus:underline">
              {name}
            </h3>
            <p>{reciepe}</p>
            <p><span className="font-bold font-[roboto]">Price :</span> {price}/- </p>

            <button onSubmit={handleOrderSubmit} className="btn">Order Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuDetails;
