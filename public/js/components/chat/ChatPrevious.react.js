import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';
import Colors from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import ThreadActions from '../../actions/Thread/ThreadActions';
import ThreadStore from '../../stores/ThreadStore';
import FlatButton from 'material-ui/lib/flat-button';
import Dialog from 'material-ui/lib/dialog';
import PaperExampleSimple from './Messages.react';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={Colors.grey400} />
  </IconButton>
);

const ListStyle = {
  width: 300,
};

const PreviousChat = React.createClass({

  handleOpen: function () {
    this.setState({ open: true });

  },

  handleClose: function () {
    this.setState({ open: false });
  },

  getInitialState: function () {
    return {
      results:ThreadStore.getThreadMessage(),
        open: false,
    };
  },

  componentDidMount: function () {
    ThreadStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
      this.setState({results:ThreadStore.getThreadMessage()});
  },

  deleteconvo:function () {
    var user2 = this.props.thread_id;
    let deleteM = {
             user2:user2,
             user1:localStorage.getItem('username'),
           };
    ThreadActions.deleteM(deleteM);
    console.log('Done deleting!');
  },

  getMessage:function () {
    let threadData = {
      threadId: this.props.id,
    };
    ThreadActions.getMessage(threadData);

    return this.state.results.map((result) => {
      return (<Paper ExampleSimple key={result.thread_id} id={result.thread_id} firstname={result.firstname}  message={result.message} created_at={result.created_at}/>);
    });
  },

  render:function () {

    const actions = [
        <FlatButton
          label="No"
          secondary={true}
          onTouchTap={this.handleClose}
        />,
        <FlatButton
          label="Yes"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.deleteconvo}
        />,
      ];

          return (
             <List style={ListStyle}>
                 <ListItem leftAvatar={<Avatar src={'img/profilepics/'+this.props.username} /> }
                   rightIconButton={<IconMenu iconButtonElement={iconButtonElement}>
                       <MenuItem onTouchTap={this.handleOpen}>Delete</MenuItem>
                     </IconMenu>
                   }
                  onTouchTap={this.getMessage}
                   primaryText={this.props.firstname}
                  secondaryText={
                    <p>
                  <span style={ { color: Colors.darkBlack } }>{this.props.message}</span><br/>
                  { this.props.created_at }
                    </p>
                }
              secondaryTextLines={2}/>

     <Divider inset={false} />

                 <Dialog
                   title="Delete Conversation"
                   actions={actions}
                   modal={false}
                   open={this.state.open}
                   onRequestClose={this.handleClose}>
                   Are you sure you want to delete this conversation?.
                 </Dialog>
            </List>

          );
        },
});

export default PreviousChat;
