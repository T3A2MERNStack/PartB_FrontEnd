export default function (state, action){
    switch (action.type){
        case "setLogin": {
            // console.log("setLogin action: " + action.data)
            return {
                ...state,
                login: action.data
            }
        }
        case "setUser" : {
            return {
                ...state,
                user: action.data
            }
        }
        case "setRecipe" : {
            return {
                ...state,
                recipe: action.data
            }
        }
        default: 
            return state
    }
}