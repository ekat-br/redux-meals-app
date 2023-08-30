import { useGetAllMealsQuery } from "./mealsApi"

export default function MealsList () {
    const {data, isError, isLoading} = useGetAllMealsQuery(); 
    
    if (isLoading){
        return <div>Loading...</div>;
    }

    if (isError){
        return <div>Error loading meals.</div>;
    }

    return (
        <>
            <div>Meals App</div>
            <ul>
              {data.meals.map((meal) => 
                <li key={meal.idMeal}>
                    <div>{meal.strMeal}</div>
                    <img src={meal.strMealThumb} alt={meal.strMeal}></img>
                </li>
              
              )}
            </ul>
           
        </>
        
    )
}