const stateDefault = {
    listAudio: [],
    currentAudio: {},
    isPlaying: false
}

const PlayerReducer = (state=stateDefault, action) => {
    switch (action.type) {
        case "CHANGE_CURRENT_AUDIO": {
            return {...state, currentAudio: action.payload.audio, isPlaying: false};
        }

        case "TOGGLE_AUDIO": {
            return {...state, isPlaying: action.payload.isPlaying}
        }

        default: {
            return state
        }
    }
}

export default PlayerReducer