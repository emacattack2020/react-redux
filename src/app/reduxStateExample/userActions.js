import axios from "axios";
export function setName(name) {
    // return {
    //     type: "SET_NAME",
    //     payload: new Promise((resolve, reject) => {
    //         setTimeout( () => {
    //                 resolve(name);
    //         },2000)
    //     })
    // } // when uncomment add _FULLFILLED to reducer

    return dispatch => {
        setTimeout( () => {
            dispatch({
                type: "SET_NAME",
                payload: name
            })
        }, 2000);
    } // when uncommented remove _FULLFILEED from reducer

    // return dispatch => {
    //     axios.get('http://rest.learncode.academy/api/wstern/users')
    //         .then(function (response) {
    //              console.log('response', response);
    //              dispatch({
    //                  type: "SET_NAME",
    //                  payload: name
    //              })
    //           })
    //           .catch(function (error) {
    //                console.log(error);
    //       });
    // }


    // return {
    //     type: "SET_NAME",
    //     payload: name
    // }
}
export function setAge(age) {
    return {
        type: "SET_AGE",
        payload: age
    }
}
export function setTempName(name) {
    return dispatch => {
        setTimeout( () => {
            dispatch({
                type: "SET_TEMP_NAME",
                payload: name
            })
        }, 0);
    } // when uncommented remove _FULLFILEED from reducer
}