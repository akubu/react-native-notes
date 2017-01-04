const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case 'NotesList':
            return action.payload;
        default:
            return state;
    }
};