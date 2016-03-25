import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';
import Divider from 'material-ui/lib/divider';





const Trends = React.createClass({

	propTypes: {
        value:      React.PropTypes.string,
        onTouchTap:   React.PropTypes.func
    },

      getDefaultProps: function() {
        return {
            value: ''
        };
    },

       changeHandler: function(e) {
        if (typeof this.props.onTouchTap === 'function') {
            this.props.onTouchTap(e.target.primaryText);
            console.log('wada kaloooo');
            console.log(this.props.tid);

        }
    },
   
	 render:function(){
	 	  return(
		 	  	<ListItem primaryText={this.props.trend} id={this.props.tid} onTouchTap={this.changeHandler}/>
	 	  	);
	 }
});

export default Trends;