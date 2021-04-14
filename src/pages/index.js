import {useState} from "react";

import Head from "next/head";

import styles from "../styles/Home.module.css";

import Playlist from "../components/Playlist";

import sampleData from "../../data/songseed.json";

export default function Home() {

    const [currentSongs, setCurrentSongs] = useState(sampleData);
    
    const deleteSong = (song) => {
        const newSongs = currentSongs.filter( (s) => s.id !== song.id);
        setCurrentSongs(newSongs);
    };
    
    return (
        <div className={styles.container}>
    
        <Head>
            <title>WRMC</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    
        <main>
            <h1>
            Welcome to WRMC!
            </h1>
            <Playlist songs={currentSongs} deleteSong={deleteSong}/>
        </main>
    
        <footer>A CS 312 Project</footer>
        </div>
    );
}
