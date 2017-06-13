import React from 'react';
import Header from './Header';
import Footer from './Footer';
import UserList from './UserList';

const UserListContainer = () =>
	<div className="container">
		<div className="columns">
			<div className="column col-12">
				<Header />
			</div>
		</div>
		<div className="columns">
			<div className="column col-12">
				<UserList />
			</div>
		</div>

		<div className="columns">
			<div className="column col-12">
				<Footer />
			</div>
		</div>
	</div>;

export default UserListContainer;
