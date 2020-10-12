import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseurl'

export const addComment = (dishId, rating, author, comment) => {

    return {
        type: ActionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
    }
};
// dishes

export const fetchDishes = () => (dispatch) => {
    // Thunk layer
    dispatch(dishesLoading(true)); 
    // sets isLoading to false so Main and EventDetail can affect
    // ui appropriately
    // make async call waiting for 2 secs
    // setTimeout(() => {
    //     dispatch(addDishes(DISHES));
    // }, 2000);
    // 
    return fetch(baseUrl + 'dishes')
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));

}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

// comments

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));

}

export const commentsLoading = () => ({
    type: ActionTypes.COMMENTS_LOADING
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

// promos

export const fetchPromos = () => (dispatch) => {
    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));

}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});


export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});
