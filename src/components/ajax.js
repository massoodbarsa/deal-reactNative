const apiHost = 'https://bakesaleforgood.com'
export default{
    async fetchInitialDeals(){
        try {
            let response = await fetch(apiHost+'/api/deals');
            let responseJson = await response.json();
            return responseJson
          } catch (error) {
            console.error(error);
          }
    },

    async fetchDealDetail(dealId){
        try {
            let response = await fetch(apiHost+'/api/deals/'+dealId);
            let responseJson = await response.json();
            return responseJson
          } catch (error) {
            console.error(error);
          }
    },
    async fetchDealSearchResult(searchTerm){
      try {
          let response = await fetch(apiHost+'/api/deals?searchTerm'+searchTerm);
          let responseJson = await response.json();
          return responseJson
        } catch (error) {
          console.error(error);
        }
  }
}