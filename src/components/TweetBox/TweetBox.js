import React, { useState } from 'react';
import './TweetBox.css';

import { Avatar, Button } from '@material-ui/core';

import db from '../../config/firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Lazar Kostic",
            username: "don_koce",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.0-9/35159270_1885118164861091_6967089570097659904_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=BWGrt6HoWRgAX80cCLC&_nc_ht=scontent.fbeg7-1.fna&oh=ffac0a7cf04c2664cbcf9f173c1d005c&oe=5F7771A0"
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.0-9/35159270_1885118164861091_6967089570097659904_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=BWGrt6HoWRgAX8MI3w0&_nc_ht=scontent.fbeg7-1.fna&oh=dd96961e5f2ddf0a1ed6f90871273cfa&oe=5F737D20" />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text" />
                <Button
                    onClick={sendTweet}
                    className="tweetBox__tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox;
