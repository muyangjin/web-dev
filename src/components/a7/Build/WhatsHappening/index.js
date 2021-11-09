import React, {useState} from "react";
import {useDispatch} from "react-redux";


const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState({"tweet": ""});
    const dispatch = useDispatch();

    const whatsHappeningChangeHandler = (event) => {
        const newWhatsHappeningText = event.target.value;
        const newWhatsHappening = {
            tweet: newWhatsHappeningText
        };
        setWhatsHappening(newWhatsHappening);
    }

    const tweetClickHandler = () => {
        const action = {
            type: 'create-tweet',
            whatsHappening
        };
        dispatch(action);
    }

    return(
        <div className="row m-1 ">
            <div className="col-2 col-xxl-1">
                <img className="rounded-circle wd-post-author-img-dimension"
                     src="../../../../media/user-icon-md-drawranger.png"/>
            </div>
            <div className="col-10 col-xxl-11">
                    <textarea className={"wd-fill-div wd-home-tweets-text-area"}
                              placeholder="What's Happening?"
                              value={whatsHappening.tweet}
                              onChange={whatsHappeningChangeHandler}>
                    </textarea>

                <hr/>

                <i className="fa fa-image wd-fg-color-twitter-blue"/>
                <i className="fa fa-chart-line wd-fg-color-twitter-blue ms-2"/>
                <i className="fa fa-smile wd-fg-color-twitter-blue ms-2"/>
                <i className="fa fa-calendar wd-fg-color-twitter-blue ms-2"/>

                <button className="btn btn-primary rounded-pill wd-bg-color-twitter-blue wd-float-right"
                        onClick={tweetClickHandler}>
                    Tweet
                </button>

            </div>
        </div>
);
}
export default WhatsHappening;
