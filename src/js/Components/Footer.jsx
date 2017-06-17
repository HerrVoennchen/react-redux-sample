import React from 'react';
import { connect } from 'react-redux';
import { selectors } from '../Store';

@connect(store => {
	return {
		loading: store.metadata.isFetching //selectors.users.listRequest(store).isPending
	};
})
export default class Footer extends React.Component {
	render() {
		let loadingContent = '';

		if (this.props.loading) {
			loadingContent = <div className="loading center" />;
		}

		return (
			<h5>
				h5 > Footer-Component
				<sub className="float-right">
					version 0.1
				</sub>
				{loadingContent}
			</h5>
		);
	}
}
