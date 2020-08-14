const initialState = {
    age: 21,
    name: 'kanak',
    history: []
};

const reducer = (state = initialState, action ) => {
     switch(action.type) {
         case "AGE_UP" :
             //newState.age +=action.value
             return {
                 ...state,
                 age: state.age + action.value,
                 history: state.history.concat({id: Math.random(), age: state.age + action.value})
             }
         case "AGE_DOWN" :
             return {
                 ...state,
                 age: state.age - action.value,
                 history: state.history.concat({id: Math.random(), age: state.age - action.value})
             }
        case "DEL_ITEM" :
            return {
                ...state,
                history: state.history.filter(el => el.id !== action.key )
            }   
             default :{
                 return {
                     ...state,
                     age: state.age,
                     history: state.history
                 }
             }
     }
};

export default reducer