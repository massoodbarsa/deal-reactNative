import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import ajax from './ajax'
import DealList from './DealList';
import DealDetail from './DealDetail';
import SearchBar from './SearchBar';
class App extends Component {

    state = {
        deals: [],
        dealsFromSearch: [],
        currentDealId: null
    }

    async componentDidMount() {
        const deals = await ajax.fetchInitialDeals()
        this.setState({ deals });

    }

    setCurrentDeal = (dealId) => {
        this.setState({
            currentDealId: dealId
        })
    }

    searchDeals = async (searchTerm) => {
        let dealsFromSearch = []
        if (searchTerm) {
            dealsFromSearch = await ajax.fetchDealSearchResult(searchTerm)
        }
        this.setState({ searchTerm });

    }

    // clearSearch = () => {
    //     this.setState({ dealsFromSearch:[] });

    // }


    unSetCurrentDeal = () => {
        this.setState({
            currentDealId: null
        })
    }

    currentDeal = () => {
        return this.state.deals.find(
            (deal) => deal.key === this.state.currentDealId
        )
    }

    render() {
        if (this.state.currentDealId) {
            return (
                <View style={styles.main}>

                    <DealDetail
                        deal={this.currentDeal()}
                        onBack={this.unSetCurrentDeal}
                    />
                </View>
            )
        }

        const dealsToDisplay = this.state.dealsFromSearch.length > 0
            ? this.state.dealsFromSearch
            : this.state.deals
        if (dealsToDisplay.length > 0) {
            return (
                <View style={styles.main}>
                    <SearchBar searchDeals={this.searchDeals} />
                    <DealList
                        deals={dealsToDisplay}
                        onItemPress={this.setCurrentDeal}
                    />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Bakesale </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 40
    },
    main: {
        marginTop: 30
    }
})

export default App;