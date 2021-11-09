import PostListItem from "./TweetListItem";
import TweetListItem from "./TweetListItem";
import {useSelector} from "react-redux";
import React, {useState} from "react";

const selectAllTweets = (state) => state.tweets;

const TweetList = () => {
    const tweets = useSelector(selectAllTweets);

    let [whatsHappening, setWhatsHappening] = useState('');
    const tweetClickHandler = () => {
        console.log(whatsHappening);
    }


    return(
        <>




            <ul className="list-group mt-2 rounded-3">
                {
                    tweets.map(data => {
                        return(<TweetListItem data = {data}/>);
                    })
                }
            </ul>
        </>
    )
}

export default TweetList;