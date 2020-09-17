import React, { useEffect, useState } from 'react';
import SongCard from './SongCard';

const MusicDisplayer = () => {
    const [tracks, setTracks] = useState(false);

    const trackChartStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100vw'
    }

    useEffect(() => {
        fetch('http://ws.audioscrobbler.com/2.0?method=user.getrecenttracks&user=crackedteeth&api_key=0b8ac2c54bc9455d48b2c5e66ed9b9ab&format=json')
        .then(res => res.json())
        .then(data => {
            setTracks(data.recenttracks.track);
        });
    }, [setTracks]);

    const renderTracks = () => {
        return tracks.map((trackData, index) => {
            return <SongCard key={index} song={trackData} />
        })
    }

    return (
        <div style={trackChartStyle}>
            {console.log(tracks)}
            {tracks ? renderTracks() : <p>One second please.</p>}
        </div>
    );
}

export default MusicDisplayer;
