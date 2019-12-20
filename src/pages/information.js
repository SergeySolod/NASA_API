import React, {Component} from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

import {SearchContent, ChangeCurrentPage, SearchSuccess} from "../redux/download-reducer";
import {getImages, getCurrentPage, getTotalCount, getIsFetching} from "../redux/selectors/download-selector";
import Download from "./download";

class Information extends React.Component {

   componentDidMount() {
       const nameId = this.props.match.params.nameId;
       this.props.SearchContent(nameId, 1);
   }

    componentWillUnmount() {
        this.props.SearchSuccess(false);
    }

    render() {
        return (
            <Download spaceBody={this.props.match.params.nameId}
                      SearchContent={this.props.SearchContent}
                      ChangeCurrentPage={this.props.ChangeCurrentPage}
                      isFetching={this.props.isFetching}
                      totalCount={this.props.totalCount}
                      currentPage={this.props.currentPage}
                      images={this.props.images}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return (
        {
            images: getImages(state),
            totalCount: getTotalCount(state),
            currentPage: getCurrentPage(state),
            isFetching: getIsFetching(state),
        }
    )
}

export default compose(
    connect(mapStateToProps, {SearchContent, ChangeCurrentPage, SearchSuccess}),
    withRouter
)(Information);