import axios from "axios";

export function fetchUsers(){
    return function(dispatch){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log("FETCH_USERS_PAYLOAD:", response.data);
                dispatch({type:'FETCH_USERS_FULFILLED', payload:response.data});
            })
            .catch((err) => {
                console.log("FECTH_USERS_ERROR");
                dispatch({type:'FETCH_USERS_REJECTED', payload:err});
            })
    }
}
export function fetchUser(id){
    return function(dispatch){
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                console.log('FETCH_USER_PAYLOAD:', response.data);
                dispatch({type:'FETCH_USER_FULFILLED', payload:response.data});
            })
            .catch((err) => {
                console.log("FETCH_USER_ERROR");
                dispatch({type:'FETCH_USER_REJECTED', payload:err});
            })
    }
}