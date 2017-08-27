import axios from "axios";

export function getNames(){
    return function(dispatch){
        dispatch({type:'REQUEST_NAMES', isNamesFetching: true, payload: []});
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log('RECIEVE_NAMES:', response.data);
                setTimeout(function(){ dispatch({type:'RECIEVE_NAMES', isNamesFetching: false, payload:response.data}); }, 2000);
                
            })
            .catch((err) => {
                console.log("RECIEVE_NAMES_ERROR");
                dispatch({type:'RECIEVE_NAMES_REJECTED', isNamesFetching: false, payload:err});
            })
    }
}

export function getUserDetails(id){
    return function(dispatch){
        dispatch({type:'REQUEST_USER_DETAILS', isFetching: true, selectedUser: id});
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                console.log("RECIEVE_USER_DETAILS:", response.data);
                setTimeout(function(){ dispatch({type:'RECIEVE_USER_DETAILS', isFetching: false, selectedUser: id, payload:response.data}); }, 2000);
                
            })
            .catch((err) => {
                console.log("RECIEVE_USER_DETAILS_ERROR");
                dispatch({type:'RECIEVE_USER_DETAILS_REJECTED', isFetching: false, payload:err});
            })
    }
}