import React from 'react';
import './Widgets.css';

import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';

import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widget">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1189966818640900096"} />

                <TwitterTimelineEmbed sourceType="profile" screenName="reactjs" options={{height: 400}} />

                <TwitterShareButton 
                    url={"https://facebook.com/donickoce"}
                    options={{text: "#reactjs is awesome", via: "reactjs"}}
                />
            </div>
        </div>
    )
}

export default Widgets;
