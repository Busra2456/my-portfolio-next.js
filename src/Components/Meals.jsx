"use client"
import {useState} from "react";
import Image from "next/image";


const Meals = () => {
      const [search , setSearch] = useState("");
      const [ meals,setMeals] = useState({});
       const [error,setError] = useState("");
     
      const loadData = async () =>{
            try{
                 const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
      const data = await res.json();
     console.log(data)
      setMeals(data.meals) 
      setError("")  
            } catch (error){
                  setError("No Data found")
            }
     }

      const handler = (e) =>{
            setSearch(e.target.value);
      }

      // useEffect(()=>{
      //       loadData()
      // },[])


     
      return (
           <div className='mt-12'> 
                        <input 
                        onChange={handler}
                        className='border outline-none p-2 bg-red-100' 
                        type="text"
                        placeholder='Search Meals...' />
                        <button onClick={() => loadData()} className="bg-red-800 border outline-none p-2 ">Search</button>
                        <div className=" mt-12 grid grid-cols-3 gap-12">
             {
                meals?.length > 0 && !error && meals?.map((meal) =>(
            <div key={meal.idMeal} className="border-2 p-4">
                  <Image src={meal?.strMealThumb} alt={meal?.strMeal} width={500} height={500}/>
                     <h6 className="text-red-500 text-center"> {meal.strMeal} </h6>
                     <p className="text-zinc-600">{meal.strInstructions}</p>
                     </div>
                                    ))
                              }
                              {
                                    error && <h6> No Data Found...</h6>
                              }
                        </div>
                  </div>
      );
};

export default Meals;