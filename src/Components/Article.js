import { transformBind } from '@vue/compiler-core';
import React, { Component } from 'react';
import thumbnail from '../Assets/TBS.jpg'

class Article extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-6">
                    <div className="container">
                        <div className="card article-style" >
                            <div className="card-img-top">
                                <img src={thumbnail} alt="" className="img-fluid article-img"/>
                            </div>
                            <div className="card-body p-4">
                                <div className='row '>
                                    <div className='col'>
                                        <h2><a href="">Title</a></h2>
                                    </div>
                                    <div className='col-md-2 '>
                                        <p className='row text-right'>Date</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget ante ex. Phasellus facilisis lectus magna, et condimentum libero.</p>           
                                </div>
                                <div className='row'>
                                    <span><a href="">Read More</a></span>
                                </div>                               
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Article;