import React,{Component} from 'react';
import ListItem from './ListItem';
import { ListView ,View,Text,TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import {NotesGet} from '../actions';
import {Button} from './common';
import {Actions} from 'react-native-router-flux';

class NotesList extends Component {
    componentWillMount() {
         this.props.NotesGet();
        //
         this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still the old set of props

        this.createDataSource(nextProps);
    }

    createDataSource({ notes }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(notes);
    }

    renderRow(notes) {
        return <ListItem notes={notes} />;
    }
    openCamera(){
        Actions.camera();
    }
    render(){
        return (
            <View>
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
            <TouchableWithoutFeedback onPress={this.openCamera.bind(this)}>
                <View style={{height:50,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                    <Text> Scan Now </Text>
                </View>
            </TouchableWithoutFeedback>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return  {notes:state.NotesList} ;
};

export default connect(mapStateToProps,{NotesGet})(NotesList);