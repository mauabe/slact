import react, { Component } from 'react';
import { REACTION_OBJECTS } from '../actions/types';

class CreateReaction extends Component {
  render() {
    return (
      <div>
        {
          REACTION_OBJECTS.map(REACTION_OBJECT => {
            const {type, emoji } = REACTION_OBJECT;

            return <span> {emoji}</span>
          }
        }
      </div>
    )
  }
}