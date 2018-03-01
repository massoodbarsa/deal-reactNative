//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { priceDisplay } from '../util';
import ajax from './ajax';


// create a component
class DealDetail extends Component {
    static propTypes = {
        deal: PropTypes.object.isRequired,
        onBack: PropTypes.func.isRequired
    }

    state = {
        deal: this.props.deal
    }

    async componentDidMount() {
        const fullDeal = await ajax.fetchDealDetail(this.state.deal.key)
        this.setState({
            deal: fullDeal
        })

    }
    render() {
        const { deal } = this.state

        return (
            <View style={styles.deal}>
                <TouchableOpacity onPress={this.props.onBack}>
                    <Text style={styles.backLink}>Back</Text>
                </TouchableOpacity>
                <Image source={{ uri: this.props.deal.media[0] }}
                    style={styles.image}
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{deal.title} </Text >
                    <View style={styles.footer}>
                        <Text style={styles.cause}>{deal.cause.name} </Text >
                        <Text style={styles.price}>{priceDisplay(deal.price)} </Text >

                    </View>
                </View>
                {deal.user && (
                    <View style={styles.details}>
                        <Image source={{ uri: deal.user.avatar }} style={styles.avatar} />
                        <Text style={styles.cause}>{deal.user.name}</Text>
                    </View>
                )}
                <View>
                    <Text style={styles.description}>{deal.description}</Text>
                </View>
            </View>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    deal: {
        marginHorizontal: 12,
        marginTop: 15
    },
    backLink:{
        backgroundColor: 'blue',
        width: 50,
        padding:5,
        color: '#FFFFFF',
        fontWeight:'bold',
        fontSize: 16
    },
    image: {
        width: '100%',
        height: 150,
        backgroundColor: '#ccc',
        marginTop: 20,
    },
    info: {
        padding: 10,
        backgroundColor: 'lightcoral',
        borderTopWidth: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    footer: {
        flexDirection: 'row'
    },
    cause: {
        flex: 2
    },
    price: {
        flex: 1,
        textAlign: 'center',

    },
    avatar: {
        width: 60,
        height: 60,
        alignContent: 'center',
        marginRight: 20,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 40,
        marginTop: 20,
        marginBottom: 20
    },
    description: {
        padding: 10,
        backgroundColor: '#fff',
        borderTopWidth: 0,
    },
});

//make this component available to the app
export default DealDetail;
