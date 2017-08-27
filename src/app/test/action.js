import axios from "axios";

export function getNames(){
    return function(dispatch){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log("GET_NAMES:", response.data);
                dispatch({type:'GET_NAMES', payload:response.data});
            })
            .catch((err) => {
                console.log("GET_NAMES_ERROR");
                dispatch({type:'GET_NAMES_REJECTED', payload:err});
            })
    }
}

export function getUserDetails(id){
    return function(dispatch){
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                console.log("GET_USER_DETAILS:", response.data);
                dispatch({type:'GET_USER_DETAILS', selectedUser: id, payload:response.data});
            })
            .catch((err) => {
                console.log("GET_USER_DETAILS_ERROR");
                dispatch({type:'GET_USER_DETAILS_REJECTED', payload:err});
            })
    }
}