import { DECREMENT, INCREMENT, RESET } from "../constant/counterConstant";

const initialNumber = { count: 0, student: 5 }
const counterSomething = (state = initialNumber, action) => {

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }


        default:
            return state;
    }

}

export default counterSomething