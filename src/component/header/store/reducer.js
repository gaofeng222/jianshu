const defaultState = {
    show : false
};

export  default ( state = defaultState, action ) => {

    if(action.type === 'search_show'){
        return {
            show : true
        }
    }
    if(action.type === 'search_hide'){
        return {
            show : false
        }
    }


    return state;

}
