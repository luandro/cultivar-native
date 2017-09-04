import React from 'react';
import { graphql, gql } from 'react-apollo';
import Page from '../components/Catalogue';

class Container extends React.Component {
	render() {
		return <Page {...this.props} />;
	}
}
const feedQuery = gql`
	query {
		allPlants(orderBy: createdAt_DESC) {
			binomial
		}
	}`;

// - Using optimistic fetch feature
const PageWithData = graphql(
	feedQuery,
	{
		options: {
			fetchPolicy: 'network-only',
			variables: {
				__offline__: true
			}
		}
	}
)(Container);

export default PageWithData;
