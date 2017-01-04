import React,{Component} from 'react';
import {Card,CardSection,Input,Button} from './common';
import {connect} from 'react-redux';
import {NotesUpdate,NotesSave} from '../actions';
import {TextInput} from 'react-native';

class NotesCreate extends Component{
    onButtonPress(){

        this.props.NotesSave({title: this.props.title, text:this.props.text});
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        placeholder="Your Note Heading"
                        label="Title"
                        value={this.props.title}
                        onChangeText={value => this.props.NotesUpdate({ prop: 'title', value })}

                    />
                </CardSection>
                <CardSection>
                    <TextInput style={{flex:1}}
                        placeholder="Your Note here.........."
                        multiline
                        value={this.props.text}
                        onChangeText={value => this.props.NotesUpdate({ prop: 'text', value })}
                        numberOfLines={10}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                            Save
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { title, text } = state.Notes;

    return { title,text };
};

export default connect(mapStateToProps,{NotesUpdate,NotesSave})(NotesCreate);