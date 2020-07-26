export default function (state, action){
    switch (action.type){
        case "setLogin": {
            // console.log("setLogin action: " + action.data)
            return {
                login: action.data
            }
        }
        case "setUser" : {
            return {
                user: action.data
            }
        }
        case "setErrorMessage" : {
            return {
                message: action.data
            }
        }
        default: 
            return state
    }
}