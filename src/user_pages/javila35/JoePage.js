import React from 'react';
import MusicDisplay from './components/MusicDisplayer/MusicDisplayer';

const JoePage = () => {
    const mainStyle = {
        backgroundColor: 'grey'
    }
    

    return (
        <div style={mainStyle}>

        <h1>Hey, my name is Joe Avila!</h1> 
        
        <p>I'm a developer out of Seattle, WA. I have a cat named Ozma. I enjoy games of all sorts: sports, video and board.</p>
        <p>I'm looking forward to working with you!</p>

        <MusicDisplay />
        </div>
    );
};

export default JoePage;