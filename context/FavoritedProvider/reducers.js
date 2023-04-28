export default function reducers(state, action) {
    switch (action.type) {
        case "ADD_FAV" :
            const {detail} = action.payload;
            if (state.favJobList.find(item => item.id === detail.id)) {
                return state
            }
            const newFavJob = [detail, ...state.favJobList]
            return {...state, favJobList: newFavJob}

        case "REMOVE_FAV" :
            const {id} = action.payload;
            const newFavJobList = state.favJobList.filter(item => item.id !== id)
            return {...state, favJobList: newFavJobList}

        case "ADD_SUBMIT" :
            const {detail: subJob} = action.payload;
            if (state.subJobList.find(item => item.id === subJob.id)) {
                return state
            }
            const newSubmitJob = [subJob, ...state.subJobList]
            return {...state, subJobList: newSubmitJob};
    
        default:
            return state;
    }
}