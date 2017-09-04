// https://github.com/graphcool-examples/algolia-brewery-example/blob/master/src/AlgoliaSearch.js

import React, { Component } from 'react';
import { Text } from 'react-native';
import {InstantSearch, Hits, SearchBox, Pagination} from 'react-instantsearch/dom';

class AlgoliaSearch extends Component {

  render() {
    return (
      <InstantSearch
        appId='6D5XUIAPG1'
        apiKey='deb1e3039cc6de01ab0128b71a42c019'
        indexName={this.props.indexName}
      >
          <SearchBox
            translations={{placeholder: 'Search beers by names, style, or brewery...'}}
            searchAsYouType={true}
          />
          <Hits hitComponent={<Text>{this.props.hit.name}</Text>} />
          <Pagination />
      </InstantSearch>
    )
  }
}

export default AlgoliaSearch

AlgoliaSearch.propTypes = {
  indexName: React.PropTypes.string,
}
