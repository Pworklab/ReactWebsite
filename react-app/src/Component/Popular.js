import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/global';
import '../styles/Popular.css'


function Popular({ rendered }) {
    const { popularAnime, isSearch, searchResults, getMorePopularAnime, loading } = useGlobalContext();
    const [page, setPage] = useState(2); // Start from page 2 since page 1 is already loaded
    const [animeList, setAnimeList] = useState([]);

    const loadMoreAnime = useCallback(async () => {
        await getMorePopularAnime(page);
        setPage((prevPage) => prevPage + 1);
    }, [page, getMorePopularAnime]);

    useEffect(() => {
        setAnimeList(popularAnime);
    }, [popularAnime]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 2) {
                if (!loading) { // Avoid multiple calls while loading
                    loadMoreAnime();
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMoreAnime, loading]);

    const conditionalRender = () => {
        const animeToRender = !isSearch && rendered === 'popular' ? animeList : searchResults;
        return animeToRender?.map((anime) => (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                <img src={anime.images.jpg.large_image_url} alt="" />
            </Link>
        ));
    };

    return (
        <div className="Popular">
            <div className="popular-anime">
                {conditionalRender()}
            </div>
        </div>
    );
}

export default Popular;