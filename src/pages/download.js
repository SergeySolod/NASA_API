import React from 'react'

import moon from '../img/moon.jpg'
import Preloader from "../components/preloader";
import Paginator from "../components/pagination";

const Download = (props) => {

   const hasImage = (result) => {
        if (typeof result !== 'undefined') {
            return result[0].href
        } else {
            return moon
        }
    }

    const hasContent = (result) => {
        if (typeof result !== 'undefined') {
            return result[0].title
        } else {
            return "No title"
        }
    };

    const sameContent = (a, b) => {
        if (a === b) {
            return null
        } else {
            return b
        }
        ;
    }

    const onPageChanged = (currentPage) => {
        const spaceBody = props.spaceBody;
        props.SearchContent(spaceBody, currentPage);
        props.ChangeCurrentPage(currentPage)
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-md-center">
                    {props.isFetching ? <Preloader/> : null}
                    <Paginator currentPage={props.currentPage} totalItemsCount={props.totalCount} pageSize={100}
                               onPageChanged={onPageChanged} portionSize={10}/>
                    {props.images.map(image =>
                        <div className='col-sm-9 col-lg-9 col-md-9   book-list pt-4'>
                            <div className='cardborder'>
                                <div className="thumbnail">
                                    <div className="card">
                                        <img src={hasImage(image.links)} alt="" className="img-thumbnail card-img-top"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{hasContent(image.data)}</h5>
                                            <p className="card-text">{sameContent(image.data[0].title, image.data[0].description)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Download;