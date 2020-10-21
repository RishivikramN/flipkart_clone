export const initialState={
    products:[]
}

export const reducer=(state,action)=>{
    switch (action.type) {
        case "ADD_PRODUCTS":
            return {...state,
                products: action.item
            };

        default:
            return state;
    }
}

