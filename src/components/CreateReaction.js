import React, { Component } from 'react';
import { REACTION_OBJECTS } from '../actions/types';
import { PubSubContext } from '../pubsub';
import { createReaction } from '../actions/reactions';
import {connect } from 'react-redux';



class CreateReaction extends Component {

  publishReaction = ({type, emoji }) => () => {
    const { username, messageId  } = this.props;

    this.context.pubsub.publish(createReaction({ type, emoji, username, messageId }));
  }


  render() {
    return (
      <div>
        {
          REACTION_OBJECTS.map(REACTION_OBJECT => {
            const {type, emoji } = REACTION_OBJECT;

            return <span 
              style={{margin: 5, border: 1, cursor: pointer}}
              key={type}
              onClick={this.pubishReaction({ type, emoji })}
            > 
            {emoji}
            </span>
          })
        }
      </div>
    )
  }
  static contextType = PubSubContext;
}

export default connect(({ username}) => ({username}))(CreateReaction);
