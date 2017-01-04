import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {TextInput} from 'react-native';
import { NotesUpdate, NotesSaveChanges, NotesDelete } from '../actions';
import { Card, CardSection, Button, Confirm,Input } from './common';

class EmployeeEdit extends Component {
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.notes, (value, prop) => {
            this.props.NotesUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { title,text} = this.props;

        this.props.NotesSaveChanges({id: this.props.notes.id,title,text });
    }


    onAccept() {
        const { id } = this.props.notes;
        this.props.NotesDelete({ id });
        this.setState({showModal:false})
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
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
                </Card>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Delete Note
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { title,text } = state.Notes;

    return {title,text};
};

export default connect(mapStateToProps, {
    NotesUpdate, NotesSaveChanges, NotesDelete
})(EmployeeEdit);
