const initialState = {
    a: 1,
    b: 1
};

const reducer = (state = initialState, action ) => {
   
     switch(action.type) {
         case "UPDATE_A" :
             //newState.age +=action.value
             return {
                 ...state,
                 a:state.a + state.b
             }
         case "UPDATE_B" :
             return {
                ...state,
                b:state.a + state.b
             } 
             default :{
                 return {
                     ...state,
                     a: state.a,
                     b: state.b
                 }
             }
     }
};

export default reducer