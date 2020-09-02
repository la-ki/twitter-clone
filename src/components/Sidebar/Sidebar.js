import React from 'react';
import './Sidebar.css';

// Icons
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentifyIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
//components
import SidebarOption from '../SidebarOption/SidebarOption';

import {Button} from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon />

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PermIdentifyIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            <Button fullWidth variant="outlined" className="sidebar__tweet">Tweet</Button>
        </div>
    )
}

export default Sidebar;
