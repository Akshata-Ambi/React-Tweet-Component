import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import moment from 'moment';


function Avatar({hash}) {
  return <img src={hash} className="avatar-icon" alt="myAvatar"/>
}

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NamewithHandle author={tweet.author}/>
        <Time  time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className="buttons">
         <ReplyButton/>
         <RetweetButton retweets={tweet.retweets}/>
         <LikeButton likes={tweet.likes}/>
         <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}

function Message({text}) {
  return ( <div className="message">
    {text}
    </div>
  );
}

function NamewithHandle({author}) {
  const {name,handle}= author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

const Time=({time})=>{
const timeString = moment(time).fromNow();
return(
<span className="time">{timeString}</span>
);
}
const ReplyButton=()=><i className="fa fa-reply reply-button"/>
const RetweetButton=({retweets})=><div><i className="fa fa-retweet retweet-button"/>{retweets}</div>
const LikeButton=({likes})=><div><i className="fa fa-heart like-button"/>{likes}</div>
const MoreOptionsButton=()=><i className="fa fa-ellipsis-h more-options-button"/>

var testTweet={
  message: "Hey Akshu",
  gravatar:"https://www.w3schools.com/howto/img_avatar2.png",
  author:{
    handle:"Akshata",
    name:"@kshu"
  },
  likes:3,
  retweets:0,
  timestamp:"2019-03-08 17:41:12"
}

ReactDOM.render(<Tweet tweet={testTweet} />, document.getElementById("root"));
