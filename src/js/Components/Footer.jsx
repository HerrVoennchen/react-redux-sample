import React from 'react';
import { connect } from 'react-redux';
import { selectors } from '../Store';

const mapStateToProps = state => ({
	loading: selectors.api.data(state).isPending,
});

@connect(mapStateToProps)
export default class Footer extends React.Component {
	render() {
		const { loading } = this.props;
		let loadingContent = '';

		if (loading) {
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
