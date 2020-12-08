import {createStore} from 'redux'




const my_store = createStore((state = {count: 0}, action) => {
    switch (action.type){
        
        case 'INCREMENT':
            const incrementBy = (typeof action.incrementBy) === 'number' ? action.incrementBy : 1;
            console.log(incrementBy)
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = (typeof action.decrementBy) === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            }
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.set
            }
        default:
            return state
    }
})

//Actions

//I'd like to increment the count
// I'd like to reset the count to zero

const unsubscribe = my_store.subscribe(()=> {
    console.log(my_store.getState())
})


my_store.dispatch({
    type: "INCREMENT",
    incrementBy: 5

})

my_store.dispatch({
    type: "INCREMENT"
})

my_store.dispatch({
    type: "RESET"
})

my_store.dispatch({
    type: "DECREMENT",
    decrementBy: 10
})

// RESET set the count equal to zero

my_store.dispatch({
    type: "SET",
    set: 101
})



