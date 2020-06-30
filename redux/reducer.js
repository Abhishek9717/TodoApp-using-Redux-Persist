export const types = {
    ADD:'ADD',
    REMOVE: 'REMOVE',
}


//Helper function to dispatch actions, optionally along with payload
export const actionCreators = {
    add: item=> {
        return {type : types.ADD, payload: item}
    },
    remove: index => {
        return {type:types.REMOVE, payload : index}
    },
}

const initialState = {
    todos : [
        "click to remove",
        "Learn React Native",
        "Write Code",
        "Go to Sleep",
    ],
}

export const reducer = (state = initialState,action) => {
    const {todos} = state;
    const {type,payload} = action;

    switch(type){
        case types.ADD : {
            return {
                ...state,
                todos: [payload, ...todos],
            }
        }
            
        case types.REMOVE:{
            return {
                ...state,
                todos : todos.filter((todo,i)=> i!==payload),
            }
        }
    }

    return state;

}