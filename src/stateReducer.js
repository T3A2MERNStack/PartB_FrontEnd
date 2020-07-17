export default function (state, action){
    switch (action.type){
        case "setLogin": {
            return {
                login: action.data
            }
        }
        default: 
            return state
    }
}