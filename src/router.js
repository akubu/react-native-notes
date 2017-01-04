import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import NotesList from './components/NotesList';
import NotesCreate from './components/NotesCreate';
import NotesEdit from './components/NotesEdit';
import CameraScan from './components/CameraScan';
const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>



                <Scene
                    onRight={() => Actions.NotesCreate()}
                    rightTitle="Add"
                    key="NotesList"
                    component={NotesList}
                    title="Notes"
                />
                <Scene
                key="NotesCreate"
                component={NotesCreate}
                title="Create Notes"
                />
                <Scene
                key="NotesEdit"
                component={NotesEdit}
                title="Edit Notes"
                />
                <Scene
                key="camera"
                component={CameraScan}
                title="scan qr code"
                />
        </Router>
    );
};

export default RouterComponent;
