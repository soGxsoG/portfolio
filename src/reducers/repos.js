const initialState={
    userName:'serpry',
    data:null,
    profile:null
}



function repos(state=initialState, action){
    switch(action.type){
        case "FETCH_DATA_REPOS":{
            return {...state, data:action.data};
            break;
        }
        case "FETCH_DATA_PROFILE":{
            return {...state, profile:action.profile};
            break;
        }
        case 'FETCH_OFFLINE_DATA':{
            return{...state, data:action.data};
            break;
        }
      

        default: return state;
    }
}


export default repos;