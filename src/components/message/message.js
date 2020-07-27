import React from 'react';
class Message extends React.Component {
  
  render() {
    const { message, messageType,  clear} = this.props;
    const className = "message message-" + messageType;

    return (Boolean(message)) ? (<div className={className} role="alert">
      <div className="closeMessageHeader">
          <span className="closeMessage" 
             onClick={clear} 
             title="click here to close error message">X
          </span>
        </div>
        <p className="messageBody">{message}</p>
      </div>) : <div className={className} role="alert"></div>;
  }

}

export default Message;
