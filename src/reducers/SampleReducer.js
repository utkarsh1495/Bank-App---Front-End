// import { REHYDRATE } from 'redux-persist/constants';
// import merge from 'lodash/merge';

let initialState = {
    samplekey: ""
}

export default function SampleReducer(state = initialState, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        // case REHYDRATE:
        //     newState = action.payload.Checkout ?
        //         merge(newState, action.payload.Checkout) : newState
        //     break;
        default:
            break
    }
    return newState
}