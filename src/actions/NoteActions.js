import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
export const NotesUpdate = ({ prop, value }) => {
    return {
        type: 'NotesUpdate',
        payload: { prop, value }
    };
};

export const NotesSave = ({title,text}) => {
    return (dispatch) => {
        axios.get('http://192.168.3.100:4321/react-native?title='+title+'&text='+text)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        firebase.database().ref(`/`)
            .push({title,text})
            .then(()=>{
                dispatch({type:'NotesSaved'});
                Actions.NotesList();
            })
    }
};

export const NotesSaveChanges = ({id,title,text}) => {
    return (dispatch) => {
        axios.get('http://192.168.3.100:4321/react-native?id='+id+'&title='+title+'&text='+text)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        firebase.database().ref(`/`)
            .push({title,text})
            .then(()=>{
                dispatch({type:'NotesSaved'});
                Actions.NotesList();
            })
    }
};

export const NotesDelete = ({id}) => {
    return (dispatch) => {
        axios.get('http://192.168.3.100:4321/react-native/delete?id='+id)
            .then(response => {
                console.log(response);
                dispatch({type:'NotesSaved'});
                Actions.NotesList();
            })
            .catch(error => console.log(error))
    }

};

export const NotesGet = () => {
    return (dispatch) => {
        axios.get('http://192.168.3.100:4321/react-native/get')
            .then(response => {
                dispatch({type:'NotesList',payload:response.data});
                console.log(response)
            } )
            .catch(error => console.log(error));
    }

};

