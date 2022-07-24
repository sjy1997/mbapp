import React, { Component } from 'react';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown} from '@fortawesome/free-solid-svg-icons';
  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Like extends Component {
  state = { liked: false };
  toggle = () => {
    let localLiked = this.state.liked;
  
    // Toggle the state variable liked
    localLiked = !localLiked;
    this.setState({ liked: localLiked });
  };
  render() {
    return (
      <div className="container">
        <center>
          <p>Do you like this recipe?</p>
          <div   role="button" tabIndex="0"
            className="container"
            style={{ border: '1px solid black', width: '15%' }}
            onClick={() => this.toggle()}
          >
            {this.state.liked === false ? (
              <FontAwesomeIcon icon={faThumbsUp} />
            ) : (
              <FontAwesomeIcon icon={faThumbsDown} />
            )}
          </div>
        </center>
      </div>
    );
  }
}
  
export default Like;