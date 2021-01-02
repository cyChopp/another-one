const SET_CONFETTI = "SET_CONFETTI";
const TODO_DELETED = "TODO_DELETED";

const initialState = {
    isConfetti:false,
    todoDeleted:false
}

const confettiReducer =(state=initialState,action)=>{
    switch(action.type){
        case SET_CONFETTI:
            return{
                ...state,
                isConfetti: action.confetti
            }
        case TODO_DELETED:
            return{
                ...state,
                todoDeleted: action.deleted
            }
            default:
                return state
    }
}

export default confettiReducer;

export const setIsConfetti = (confetti)=>({
    type:   SET_CONFETTI,
    confetti
})
export const setTodoDeleted = (deleted)=>({
    type:   TODO_DELETED,
    deleted
})