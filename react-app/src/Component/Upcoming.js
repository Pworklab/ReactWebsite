import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/global';
import '../styles/Upcoming.css'; // Import the CSS file

function Upcoming({ rendered }) {
    const { upcomingAnime, isSearch, searchResults } = useGlobalContext();

    const conditionalRender = () => {
        const animeList = !isSearch && rendered === 'upcoming' ? upcomingAnime : searchResults;
        
        const uniqueAnimeList = Array.from(new Set(animeList.map(anime => anime.mal_id)))
            .map(id => {
                return animeList.find(anime => anime.mal_id === id);
            });

        return uniqueAnimeList?.map((anime) => (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                <img src={anime.images.jpg.large_image_url} alt={anime.title} />
            </Link>
        ));
    };

    return (
        <div className="upcoming-container">
            <div className="upcoming-anime">
                {conditionalRender()}
            </div>
        </div>
    );
}

export default Upcoming;