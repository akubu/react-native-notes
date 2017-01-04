import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection ,Card} from './common';

class ListItem extends Component {
    onRowPress() {
        Actions.NotesEdit({ notes: this.props.notes });
    }

    render() {
        const { title,text } = this.props.notes;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <Card>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                        <CardSection>
                        <Text style={styles.textStyle}>
                            {text}
                        </Text>
                    </CardSection>
                    </Card>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        fontWeight: 'bold',
        textAlign:'center'
    },
    textStyle: {
        textAlign:'left'
    }
};

export default ListItem;
