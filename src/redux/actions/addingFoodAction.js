import { ADD_FOOD } from "../types/addingFoodType";
const addingFoodAction = (propsBurger, amount) => {
    return ({
        type: ADD_FOOD,
        propsBurger,
        amount
    });
}
export default addingFoodAction;