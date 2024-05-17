import React from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../Context/global';
import '../styles/Gallery.css'


function Gallery() {
    const {getAnimePictures, pictures} = useGlobalContext()
    const {id} = useParams();

    //state
    const [index, setIndex] = React.useState(0);

    const handleImageClick = (i) => {
        setIndex(i)
    }


    React.useEffect(() => {
        getAnimePictures(id)
    }, [id])

    return (
        <div className="gallery-container">
            <div className="back">
                <Link to="/">
                    <i className="fas fa-arrow-left"></i>
                    Back to Home
                </Link>
            </div>
            <div className="big-image">
                <img src={pictures[index]?.jpg.image_url} alt="" />
            </div>
            <div className="small-images">
                {pictures?.map((picture, i) => {
                    return (
                        <div className="image-con" onClick={() => handleImageClick(i)} key={i}>
                            <img
                                src={picture?.jpg.image_url}
                                className={i === index ? 'active' : ''}
                                alt=""
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Gallery