
import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import DealItem from './DealItem';

// create a component
class MyClass extends Component {
    static propTypes = {
        deals: PropTypes.array.isRequired,
        onItemPress: PropTypes.func.isRequired
    }

    render() {

        return (
            <View style={styles.list}>
                <FlatList
                    data={this.props.deals}
                    renderItem={({ item }) => <DealItem deal={item} onPress={this.props.onItemPress} />}
                />
                {/* {this.props.deals.map((deal) =>
                    <Text key={deal.key}>{deal.title}</Text>
                )} */}

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    list: {
        backgroundColor: '#eee',
        width: '100%',
    },
});

//make this component available to the app
export default MyClass;
