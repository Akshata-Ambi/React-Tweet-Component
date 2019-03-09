import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Avatar() {
  return <i class="fas fa-user avatar-icon" />;
}

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NamewithHandle />
        <Time/>
        <Message />
        <div className="buttons">
         <ReplyButton/>
         <RetweetButton/>
         <LikeButton/>
         <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}

function Message() {
  return (
    <div className="message">Hey you are using Twitter!!</div>
  );
}

function NamewithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Akshata</span>
      <span className="handle">@akshu</span>
    </span>
  );
}

const Time=()=><span className="time">3h ago</span>
const ReplyButton=()=><i className="fa fa-reply reply-button"/>
const RetweetButton=()=><i className="fa fa-retweet retweet-button"/>
const LikeButton=()=><i className="fa fa-heart like-button"/>
const MoreOptionsButton=()=><i className="fa fa-ellipsis-h more-options-button"/>

ReactDOM.render(<Tweet />, document.getElementById("root"));
