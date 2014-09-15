/** @jsx React.DOM */
(function () {
	'use strict';

	var Quiz = React.createClass({
		render: function () {
			return <div>hello {this.props.data}</div>;
		}
	});

	React.renderComponent(<Quiz data={"foo"}/>, document.body);

})();