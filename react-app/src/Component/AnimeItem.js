import React, { useEffect } from 'react'
import {Link, useParams } from 'react-router-dom'
import '../styles/AnimeItem.css'


function AnimeItem() {
    const baseUrl = "https://api.jikan.moe/v4";
   
    const { id } = useParams();
    const [anime, setAnime] = React.useState({});
    const [characters, setCharacters] = React.useState([]);
    const [showMore, setShowMore] = React.useState(false);

    // destructor
    const { title, synopsis, duration, aired, season, images, rank, score, scored_by, popularity, status, rating, source } = anime;

    //アニメの情報取得
    const getAnime = async (anime) => {
        const response = await fetch(`${baseUrl}/anime/${anime}`);
        const data = await response.json();
        setAnime(data.data);
    }

    //アニメキャラの情報取得
    const getCharacters = async (anime) =>{
        const response = await fetch(`${baseUrl}/anime/${anime}/characters`);
        const data = await response.json();
        setCharacters(data.data);
    }

    useEffect(() => {
        getAnime(id);
        getCharacters(id);
    }, []);
    return (
        <div className="anime-details"> {}
            <div>
                <h1>{title}</h1>
                <div className="details">    
                    <div className='image'>
                    <img src={images?.jpg.large_image_url} alt=""/>
                    </div>

                    <div className=".details-left">
                            <p><span>Aired:</span><span>{aired?.string}</span></p>
                            <p><span>Rating:</span><span>{rating}</span></p>
                            <p><span>Rank:</span><span>{rank}</span></p>
                            <p><span>Score:</span><span>{score}</span></p>
                            <p><span>Scored By:</span><span>{scored_by}</span></p>
                            <p><span>Popularity:</span><span>{popularity}</span></p>
                            <p><span>Status:</span><span>{status}</span></p>
                            <p><span>Source:</span><span>{source}</span></p>
                            <p><span>Season:</span><span>{season}</span></p>
                            <p><span>Duration:</span><span>{duration}</span></p>
                    </div>
                    <p className="description">
                        {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
                        <button onClick={() => {
                            setShowMore(!showMore)
                        }}>{showMore ? 'Show Less': 'Read More'}</button>
                    </p>
                </div>
           
                <h3 className="title">Characters</h3>
                <div className="characters">
                    {characters?.map((character, index) => {
                        const {role} = character;
                        const {images, name, mal_id} = character.character;
                        return <Link to={`/character/${mal_id}`} key={index}>
                            <div className="character">
                                <img src={images?.jpg.image_url} alt="" />
                                <h4>{name}</h4>
                                <p>{role}</p>
                            </div>
                        </Link>;
                    })}
                </div>
            </div>
        </div>
    );
}
export default AnimeItem;