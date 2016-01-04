var React = require('react');
var Router = require('react-router');
var Notes = require('./Github/Notes');
var Notes = require('./Github/Notes');
var Notes = require('./Github/Notes');

var Profile = React.createClass({
  getInitialState: function() {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  render: function() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-md-4">
          {this.props.params.username}
        </div>
        <div className="col-md-4">
          Yo1
        </div>
        <div className="col-md-4">
          Yo2
        </div>
      </div>
    );
  }
});

module.exports = Profile;