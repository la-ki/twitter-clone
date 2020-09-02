import React from 'react';
import './TweetBox.css';

import {Avatar, Button} from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.0-9/35159270_1885118164861091_6967089570097659904_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=BWGrt6HoWRgAX8MI3w0&_nc_ht=scontent.fbeg7-1.fna&oh=dd96961e5f2ddf0a1ed6f90871273cfa&oe=5F737D20" />
                    <input placeholder="What's happening?" type="text" />
                </div>
                <input className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"/>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
