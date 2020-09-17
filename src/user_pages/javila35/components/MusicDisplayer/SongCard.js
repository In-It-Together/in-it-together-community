import React from 'react';

const SongCard = (props) => {
    const { album, artist, image, name } = props.song;

    const songCardStyle = {
        position: 'relative',
        textAlign: 'center'
    };

    const textContainerStyle = {
        backgroundColor: 'rgba(250, 192, 0, 0.8)',
        color: 'white',
        width: '100%',
        position: 'absolute',
        top: '80%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textTransform: 'uppercase',
        fontSize: '1em'
    };
    
    const wrapperStyle = {
        position: 'relative',
        marginTop: '0',
        marginBottom: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        overflow: 'hidden'
    };

    const imageStyle = {
        objectFit: 'cover',
        width: '100%',
        position: 'relative'
    }

    return (
        <div style={wrapperStyle}>
            <div style={songCardStyle}>
                <img style={imageStyle} src={image[3]['#text']} alt={album['#text']}></img>
                <div style={textContainerStyle}>
                    <p><b>{name}</b></p>
                    <p><b>{artist['#text']} - {album['#text']}</b></p>
                </div>
            </div>
        </div>
    );
}

export default SongCard;
