import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {NavLink, withRouter} from "react-router-dom";

import {getPlanets, fetchPlanetsTC, getIsFetching} from "../redux/planets-reducer";
import Preloader from "../components/preloader";
import {compose} from "redux";

const Planets = (props) => {
    useEffect(() => {
        props.fetchPlanetsTC();
    }, []);

    return (
        <div>
            {props.isFetching ? <Preloader/> : null}
            <div className="row">
                {
                    props.planets.map(planets => <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={planets.id}>
                        <div className="thumbnail">
                            <div className="card">
                                <img src={planets.image} className="img-thumbnail card-img-top" alt="Планета"/>
                                <div className="card-body">
                                    <h5 className="card-title">{planets.name}</h5>
                                    <p className="card-text">{planets.description.slice(0, 145)}... (подробнее по
                                        кнопке)</p>
                                    <NavLink to={`/planets/${planets.nameId}`}
                                             className="btn btn-secondary">Подробнее</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )

}

let mapStateToProps = (state) => {
    return (
        {
            planets: getPlanets(state),
            isFetching: getIsFetching(state)
        }
    )
}

export default compose(
    connect(mapStateToProps, {fetchPlanetsTC}),
    withRouter
)(Planets);