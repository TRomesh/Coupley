import React from 'react';
import Card from 'material-ui/lib/card/card';
import ListItem from 'material-ui/lib/lists/list-item';
import List from 'material-ui/lib/lists/list';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';



var Comment = React.createClass({
    render: function () {
        return (
            <div>
                <Card>
                    <ListItem
                        leftAvatar={<Avatar src={'img/profilepics/'+ this.props.cusername} />}
                        primaryText={this.props.cfirstName}
                        secondaryText={<p>{this.props.comment_txt}</p>}
                        secondaryTextLines={1} />
                    <Divider inset={true} />
                </Card>
            </div>
        );
    }
});

export default Comment;


