import * as ActionTypes from './ActionTypes';

export const Comments = (state = { 
    errMess: null,
    isLoading: false,
    comments:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            console.log("in ADD_COMMENT ");
            return { ...state, errMess: null, comments: state.comments.concat(comment)};
            
        case ActionTypes.ADD_COMMENTS:

            console.log("in ADD_COMMENTS ");
            return {...state,  isLoading: false, errMess: null, comments: action.payload};

        // case ActionTypes.COMMENTS_LOADING:
        //     return {...state,  errMess: null, comments: []}

        case ActionTypes.COMMENTS_FAILED:
            return {...state,  isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};