//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

// create a component
class SearchBar extends Component {
    static PropTypes = {
        searchDeals: PropTypes.func.isRequired,
    };

    state = {
        searchTerm: ''
    }
    
    debouncedSearchDeals=debounce(this.props.searchDeals,300)


    handleChange = (searchTerm) => {
        this.setState({ searchTerm },()=>{
            this.debouncedSearchDeals(this.state.searchTerm)
        });
    }

    render() {
        return (
            <TextInput
                placeholder='search'
                style={styles.input}
                onChangeText={this.handleChange}
            />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    input: {
        height: 40,
        marginHorizontal: 12,
    },
});

//make this component available to the app
export default SearchBar;
