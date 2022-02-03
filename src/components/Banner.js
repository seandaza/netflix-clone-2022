import { makeStyles, Typography, Button } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
/* import Netflix from '../images/Netflix.jpg'; */
import requests from '../Requests';

const Banner = () => {
    const classes = useStyles();
    const truncate = (string, n) => string?.length > n ? string.substr(0, n - 1) + '...' : string;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const random = Math.floor(Math.random() * request.data.results.length - 1);
            setMovies(request.data.results[random]);
            console.log(request.data.results);
            return request;
        };
        fetchData(); 
    }, [])

    console.log(movies);

    return (
        <div className={classes.root} style={
                {backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
                position: 'relative',
                height: '800px',
                objectFit: 'contain',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                marginTop: '0px',
            }}>
            <div className={classes.content}>
                <Typography variant="h2" component='h1'>
                    {movies?.title || movies?.name || movies?.original_name}
                </Typography>
                <div className={classes.buttons}>
                    <Button size="large">Play</Button>
                    <Button size="large">Information</Button>
                </div>
                <Typography
                style={{padding: '100px', marginLeft: '-100px', marginTop: '-40px'}}
                className={classes.description}
                variant="h6"
                >
                <div style={{width: '400px' }} >
                {truncate(movies?.overview, 115)}
                </div>
                </Typography>

                {/* Estilo estatico */}
{/*             <div className={classes.content}>
                <Typography style={{color:'#FA04BF', fontFamily:'Georgia'}} variant="h1" component="h1">
                    Squid Game
                </Typography>

                <Typography style={{ wordWrap: "break-word"}} variant="h6" className={classes.description}>
                    {
                        truncate("Movie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie Description", 90)
                    }
                </Typography>
                <div className={classes.buttons}>
                    <Button>Play</Button>
                    <Button>My List</Button>
                </div> */}
                <div className={classes.fadeBottom} />
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({

    root: {
        /* backgroundImage: `url(${Netflix})`, */
        position: 'relative',
        height: '440px',
        objectFit: 'contain',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        marginTop: '0px',
        transition: 'transform 20000ms',
        "&:hover": {
            transform: 'scale(1.111)',
        },
    },
    buttons: {
        height: '60px',
        "& button": {
            cursor: 'pointer',
            color: '#fff',
            fontWeight: 750,
            borderRadius: '7px',
            padding: theme.spacing(2.1,12,2.1,12),
            marginRight: "1rem",
            backgroundColor: "rgba(51, 51, 51, 0.5)",
        },
        "& button:hover": {
            color: '#000',
            backgroundColor: '#e6e6e6',
        },
    },
    content: {
        position: 'absolute',
        bottom: '0',
        padding: theme.spacing(12),
        top: '30%',


    },
    description: {
        wordWrap: "break-word",
    },
    fadeBottom: {
        position: 'absolute',
        bottom: 0,
        top: "30vh",
        left: 0,
        right: 0,
        zIndex: 99,
        backgroundImage: 'linear-gradient(180deg,transparent,rgba(37,37,0,0.61),#111)',

    }
  }));

export default Banner
