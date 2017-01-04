const INITIAL_STATE = {
    title: '',
    text:''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case 'NotesUpdate':
            return { ...state, [action.payload.prop]: action.payload.value };

        case 'NotesSaved':
            return {title:'',text:''};
        default:
            return state;
    }
};