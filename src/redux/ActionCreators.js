import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseurl'

// comment - singular

export const addComment = (comment) => {

    return {
        type: ActionTypes.ADD_COMMENT,
        payload: comment
    }
};

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    const str = JSON.stringify(newComment);
    // alert('in postComment: ' + str);

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: str,
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;

            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(comment => dispatch(addComment(comment)))
        .catch(error => {
            console.log('Post comments', error.message);
            // alert('Comment could not be posted\nError: ' + error.message);
        });
}

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
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;

            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));

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

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;

            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
}
export const commentsLoading = () => ({
    type: ActionTypes.COMMENTS_LOADING
});


export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

// promos

export const fetchPromos = () => (dispatch) => {
    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;

            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));

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
