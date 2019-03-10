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
         <RetweetButton count={tweet.retweets}/>
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

function getRetweetCount(count){
  if(count>0){
    return( <span className="retweet-count">
    {count}
    </span>
    );
  } else{
    return null;
  }
}
const ReplyButton=()=><i className="fa fa-reply reply-button"/>
const RetweetButton=({count})=><span className="retweet-button"><i className="fa fa-retweet"/>{getRetweetCount(count)}</span>
const LikeButton=({likes})=><div><i className="fa fa-heart like-button"/>{likes}</div>
const MoreOptionsButton=()=><i className="fa fa-ellipsis-h more-options-button"/>

var testTweet={
  message: "Hey Akshu good girl!!",
  gravatar:"https://www.w3schools.com/howto/img_avatar2.png",
  author:{
    handle:"Akshata",
    name:"I a'm Akshi"
  },
  likes:3,
  retweets:5,
  timestamp:"2019-03-08 17:41:12"
}

ReactDOM.render(<Tweet tweet={testTweet} />, document.getElementById("root"));
