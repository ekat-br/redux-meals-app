import MealsCard from "./MealsCard";
import { useGetAllMealsQuery } from "./mealsApi"
import { styled } from "styled-components";

export default function MealsList () {
    const {data, isError, isLoading} = useGetAllMealsQuery(); 
    
    if (isLoading){
        return <div>Loading...</div>;
    }

    if (isError){
        return <div>Error loading meals.</div>;
    }

    return (
        <Container>
            <div>Meals App</div>
            <MealsUList>
              {data.meals.map((meal) => 
               <MealsCard key={meal.idMeal} meal={meal}/>
              
              )}
            </MealsUList>
           
        </Container>
        
    )
}

const Container = styled.h1`
text-align: center; 
font-size: 1.5rem; 
margin-top: 20px; 
color: #DB5375;
`
const MealsUList = styled.ul`
padding: 10px 40px 10px 40px;


`