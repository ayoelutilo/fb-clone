import React from 'react'
import Story from "./Story"
import  "./StoryReel.css";

function StoryReel() {
return (
        <div className="storyReel">

<Story
        image="https://randomuser.me/api/portraits/women/14.jpg"
        profileSrc="https://avatars.githubusercontent.com/u/40527644?s=60&v=4"
        title="Ayo Elutilo"
      />
      <Story
        image="https://randomuser.me/api/portraits/men/87.jpg"
        profileSrc="https://randomuser.me/api/portraits/men/55.jpg"
        title="John Boyega"
      />
      <Story
        image="https://randomuser.me/api/portraits/women/16.jpg"
        profileSrc="https://randomuser.me/api/portraits/men/2.jpg"
        title="Han Solomon"
      />
      <Story
        image="https://randomuser.me/api/portraits/women/43.jpg"
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Frank Guzman"
      />
      <Story
        image="https://randomuser.me/api/portraits/men/53.jpg"
        profileSrc="https://randomuser.me/api/portraits/men/21.jpg"
        title="Jean Paul"
      />

        </div>
    );
}

export default StoryReel
