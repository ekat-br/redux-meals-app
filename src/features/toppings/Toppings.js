import { useDispatch } from "react-redux";
import { toggledTopping } from "./toppingsSlice";
import { styled } from "styled-components";

export default function Toppings ({mealId}) {

    const dispatch = useDispatch();

    function handleToggleTopping (topping) {
        dispatch(toggledTopping({mealId, topping}))
    }


    return (
        <Container>
            <label>
                <input type="checkbox" onChange={() => handleToggleTopping("Cheese")}/> Cheese
            </label>
            <label>
                <input type="checkbox" onChange={() => handleToggleTopping("Garlic Sauce")} /> Garlic Sauce
            </label>
            <label>
                <input type="checkbox" onChange={() => handleToggleTopping("Ketchup")} /> Ketchup
            </label>
        </Container>
    ); 

}

const Container = styled.div`
display: block;
color: #113537;
`