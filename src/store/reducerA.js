const initialState = {
    a: 1
};

const reducer = (state = initialState, action ) => {
   
     switch(action.type) {
         case "UPDATE_A" :
             return {
                 ...state,
                 a:state.a + action.b
             }
         default :{
                 return {
                     ...state,
                     a: state.a,
                     b: action.b
                 }
             }
     }
};

export default reducer