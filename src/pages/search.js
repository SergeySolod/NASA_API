import React, {Component} from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {Field, reduxForm} from "redux-form";
import {Input} from "../components/formsControl";
import {required} from '../utils/validators/validators'
import moon from '../img/moon.jpg'

import {ChangeCurrentPage, SearchContent} from "../redux/download-reducer";
import {
    getImages,
    getSearchSuccess,
    getchangeObject,
    getTotalCount,
    getCurrentPage,
    getIsFetching
} from "../redux/selectors/download-selector";
import Download from "./download";

const SearchForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label>Что хотите увидеть?</label>
                <Field placeholder={'moon, sun or pluto'} name={'SearchContent'} validate={[required]} component={Input}
                       className="form-control"/>
            </div>
            <button className="btn btn-secondary">Поиск</button>
        </form>
    )
}

const SearchReduxForm = reduxForm({form: 'search'})(SearchForm)

const SearchContainer = (props) => {
    const onSubmit = (formData) => {
        props.SearchContent(formData.SearchContent);
    }

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Что это?</h1>
                    <p className="lead">Это поисковая система с использованием NASA Open APIs. Работает она очень
                        просто: достаточно ввести в поисковую строку наименование любого комического тела на английском
                        языке. Примеры самых красивых и интересных комических тел:</p>
                    <p className="text-muted">
                        1. Галактика Андромеда - andromeda;<br/>
                        2. Солнце - sun;<br/>
                        3. Луна - moon;<br/>
                        4. Плутон - pluto;<br/>
                        5. Юпитер - jupiter;<br/>
                        6. Сатурн - saturn;<br/>
                        7. Уран - uranus;<br/>
                        8. Венера - venus;<br/>
                        9. Земля - earth;<br/>
                        10. Марсоход - curiosity ;<br/>
                        и огромное множество других удивительных объектов...
                    </p>
                    <SearchReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
            { props.searchSuccess && <Download
                images={props.images}
                spaceBody={props.changeObject}
                searchSuccess={props.searchSuccess}
                changeObject={props.changeObject}
                totalCount={props.totalCount}
                currentPage={props.currentPage}
                isFetching={props.isFetching}
                SearchContent={props.SearchContent}
                ChangeCurrentPage={props.ChangeCurrentPage}
            />}
        </div>
    )
}


let mapStateToProps = (state) => {
    return (
        {
            images: getImages(state),
            searchSuccess: getSearchSuccess(state),
            changeObject: getchangeObject(state),
            totalCount: getTotalCount(state),
            currentPage: getCurrentPage(state),
            isFetching: getIsFetching(state),
        }
    )
}

export default compose(
    connect(mapStateToProps, {SearchContent, ChangeCurrentPage}),
    withRouter
)(SearchContainer);