import React from 'react';
import { BsFlag, BsX } from 'react-icons/bs';
import { AnnouncementHeader, AnnouncementsCard } from './Announcements.css';

const Announcements = () => {
    return (
        <div style={{ marginTop: "50px" }}>
            <AnnouncementsCard>
                <AnnouncementHeader>
                    <BsFlag />
                    <h3>Announcements</h3>
                    <BsX />
                </AnnouncementHeader>
                <AnnouncementHeader>
                    <h3>ABC Title</h3>
                    <p>10/28/12</p>
                </AnnouncementHeader>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi doloribus assumenda fugiat, quo vitae porro laboriosam cupiditate suscipit quidem accusantium.
                </p>
            </AnnouncementsCard>

        </div>
    );
};

export default Announcements;