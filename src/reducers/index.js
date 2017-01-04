import { combineReducers } from 'redux';
import NotesUpdate from './NotesUpdate';
import NotesLists from './NotesList';

export default combineReducers({
    Notes: NotesUpdate,
    NotesList:NotesLists
});
