const initialState = {
    b: 1
};

const reducer = (state = initialState, action ) => {
   
     switch(action.type) {
         case "UPDATE_B" :
             return {
                ...state,
                b:action.a + state.b
             } 
             default :{
                 return {
                     ...state,
                     a: action.a,
                     b: state.b
                 }
             }
     }
};

export default reducer