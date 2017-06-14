import React from 'react';
import { connect } from 'react-redux';
import { actions, selectors } from '../Store';

const mapStateToProps = state => {
	const { data, error, isPending } = selectors.api.data(state);
	return {
		loading: isPending,
		users: data,
		error,
	};
};

const mapDispatchToProps = {
	fetchUsers: actions.api.data,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class UserList extends React.Component {
	// we bind via creating an instance of this function for each object
	// so it will belong to object, not to prototype
	handleFetch = (e) => {
		e.preventDefault();
		this.props.fetchUsers();
	}

	render() {
		const { loading, users = [] } = this.props;
		let loadingClass = '';
		let panelContent = <li><mark>Keine Benutzer vorhanden</mark></li>;

		if (loading) {
			loadingClass = ' loading';
		}

		if (users && users.length > 0) {
			let contentTmp = [];
			panelContent = users.map(user =>
				<li key={user.id}>
					<kbd>{user.name}</kbd>
					{' '}
					<strong>
						<a href={'mailto:' + user.email}>{user.email}</a>
					</strong>
					{' '}/{' '}
					<strong>{user.phone}</strong>
					{' '}/{' '}
					<strong>
						<a href={'http://' + user.website}>{user.website}</a>
					</strong>
				</li>
			);
		}

		return (
			<div className="panel panel-primary">
				<div className="panel-header">
					<div className="panel-title">
						Benutzerliste
						&nbsp;
						<button
							className={'btn btn-sm' + loadingClass}
							onClick={this.handleFetch}
						>
							<span>Aktualisieren</span>
						</button>
						<div className="divider" />
					</div>
				</div>
				<div className="panel-body">
					<ul>
						{panelContent}
					</ul>
				</div>
			</div>
		);
	}
}
