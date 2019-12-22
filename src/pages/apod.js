import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {NavLink, withRouter} from "react-router-dom";

import {compose} from "redux";
import {fetchApod} from "../redux/apod-reducer";
import {getApod} from "../redux/selectors/apod-selector";

const Apod = (props) => {
    useEffect(() => {
        props.fetchApod();
    }, []);
const type = props.apod.media_type
    return (
        <div>

            <div className="card mb-3">
                { type === 'video' && <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item"
                            src={props.apod.url} allowFullScreen></iframe>
                </div>}

                {  type != 'video' && <img src={props.apod.url} className="card-img-top" alt="Космос"/>}
                <div className="card-body">
                    <h5 className="card-title">{props.apod.title}</h5>
                    <p className="card-text">{props.apod.explanation}</p>
                    <p className="card-text">
                        <small className="text-muted">{props.apod.copyright}</small>
                        <br/>
                        <small className="text-muted">{props.apod.date}</small>
                    </p>
                </div>
            </div>
        </div>
    )

}

let mapStateToProps = (state) => {
    return (
        {
            apod: getApod(state)
        }
    )
}

export default compose(
    connect(mapStateToProps, {fetchApod}),
    withRouter
)(Apod);