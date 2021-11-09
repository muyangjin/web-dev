import posts from './data/tweet_data.json';

const tweets = (state = posts, action) => {
    switch (action.type) {
        case 'create-tweet':
            const tweet = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                ...action.whatsHappening,
                "avatar_image": "../../../media/user-icon-md-drawranger.png",
                "logo_image": "../../../media/user-icon-md-drawranger.png",
                "link_image": "",
                "link_title": "",
                "link_summary": "",
                "liked": false,
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                }
            }
            return [
                tweet,
                ...state,
            ];
        case 'delete-tweet':
            return state.filter(tweet => tweet._id !== action.data._id);

        case 'like-tweet':
            return state.map(tweet => {
                if(tweet._id === action.data._id) {
                    if(tweet.liked === true) {
                        tweet.liked = false;
                        tweet.stats.likes--;
                    } else {
                        tweet.liked = true;
                        tweet.stats.likes++;
                    }
                    return tweet;
                } else {
                    return tweet;
                }
            });


        default:
            return state;
    }
}

export default tweets;
