import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../../components/RightContainer/Header'
import BlogContainer from '../../components/RightContainer/BlogContainer';
import './index.scss';
import FilterCard from '../../components/FilterCard';

import CATEGORY from '../../../assets/images/ic_category.png';
import TAGS from '../../../assets/images/ic_tags.png';

const DUMMY_DATA = [1, 2, 3, 4, 5];

export class Blogs extends Component {
    render() {
        return (
            <div className="blog-container">
                <Header
                    routeName="BLOGS"
                    pageIcon="https://img.icons8.com/cotton/64/000000/spiral-bound-booklet--v1.png"
                />
                <div className="blog-right-content">
                    <div className="blog-wrapper">
                        {
                            DUMMY_DATA.map((item, index) => (
                                <BlogContainer key={index} />
                            ))
                        }
                    </div>
                    <div className="blog-filter-wrapper">
                        <FilterCard
                            iconSrc={CATEGORY}
                            title={'Categories'}
                            listItem={['Technology', 'Music', 'Programming', 'Travelling', 'Reading', 'Programming', 'Travelling']}
                        />
                        <FilterCard
                            iconSrc={TAGS}
                            title={'Tags'}
                            listItem={['#Technology', '#Music', '#Programming', '#Travelling', '#Reading', '#Programming', '#Travelling']}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs)
