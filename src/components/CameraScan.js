"use strict";

import React,{Component} from 'react';
import Camera from 'react-native-camera';
import axios from 'axios';
import {Actions} from 'react-native-router-flux';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
} from 'react-native';

class CameraScan extends Component {

    state = {
        code:'',
        showCamera: true,
        cameraType: Camera.constants.Type.back
    };


    renderCamera() {
        if(this.state.showCamera) {
            return (

                <Camera
                    ref="cam"
                    style={styles.container}
                    onBarCodeRead={this.onBarCodeRead.bind(this)}
                    type={this.state.cameraType}>

                </Camera>

            );
        } else {
            return (
                <View></View>
            );
        }
    };

    render() {
        return (

            this.renderCamera()




        );
    };

    onBarCodeRead(e) {
        // this.setState({showCamera: false});
        Alert.alert(
            "Barcode Found!",
            "Type: " + e.type + "\nData: " + e.data,
            [{text: 'ok',onPress: () =>{
                this.setState({showCamera:true});
                this.setState({code:e.data});

            }}]
        );
        axios.get('http://192.168.3.100:4321/react-native?title=QR_Code&text='+e.data)
            .then(response => {
                console.log(response);
                Actions.NotesList();
            })
            .catch(error => console.log(error));
        this.setState({showCamera:false});
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    }
});

export default CameraScan;