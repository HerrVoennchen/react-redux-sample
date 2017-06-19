import React from 'react';
import { connect } from 'react-redux';
import { actions, selectors } from '../Store';

@connect(
	store => {
		return {
			loading: selectors.users.listRequest(store).isPending,
			users: selectors.users.listRequest(store).data
		};
	},
	{ startRequest: actions.users.listRequest2 }
)
export default class UserList extends React.Component {
	constructor(props) {
		super(props);

		this.handleFetch = this.handleFetch.bind(this);
	}

	handleFetch(e) {
		e.preventDefault();
		//this.props.dispatch(fetchData3());
		//this.props.dispatch(actions.users.listRequest({}));
		this.props.startRequest({});
	}

	render() {
		let loadingClass = '';
		let panelContent = <li><mark>Keine Benutzer vorhanden</mark></li>;
		let { loading, users } = this.props;

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
						<button className={'btn btn-sm' + loadingClass} onClick={this.handleFetch}>
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
