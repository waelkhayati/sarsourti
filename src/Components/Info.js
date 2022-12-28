import React from 'react';

function Info({info}) {


        return (   
            <React.Fragment>
                <div className="card p-0 mb-8 border-0 shadow-md cardShaodw mb-3">
                    <div className="card-body">
                        <span className='row '>
                            <span className="col-1 color--heading d-lg-inline d-none">
                                <span className="badge badge-circle background--danger text-white mx-3 my-2">{info.major}</span> 
                            </span>
                        <span className="col-11">
                            <span className="row my-1 justify-content-between align-items-center">
                                <span className="col-6 col-md-6 my-3 px-0 my-sm-0 col-sm-5 color--text text-left">
                                    <i className="fas fa-book mx-1"></i>{info.course_id}:{info.course_name}</span>
                                                    
                                    <span className="col-2 col-md-2 my-3 px-0 my-sm-0 color--heading text-left d-lg-none d-md-flex">
                                            <span className="badge background--danger text-white mx-3 my-2">{info.major}</span> 
                                    </span>

                                                    

                                    <span className="col-4 col-md-4 my-3 px-0 my-sm-0 col-sm-4 color--text text-left">
                                        <i className="fas fa-user mx-1"></i>{info.professor}</span>
                                    </span>

                                    <span className='row my-1'>
                                        <span className="col-4 col-md-4 my-3 px-0 my-sm-0 col-sm-3 color--text text-left">
                                            <i className="fas fa-users mx-1"></i> {info.level}
                                        </span>

                                        <span className="col-4 col-md-4 my-3 px-0 my-sm-0 col-sm-6 color--text text-left">
                                            <i className="fas fa-clock mx-1"></i> {info.time}
                                        </span>

                                        <span className="col-3 col-md-3 my-3 px-0 my-sm-0 col-sm-3 color--text text-left">
                                            <i className="fas fa-map-marker-alt mx-1"></i> {info.room}
                                        </span>
                                                    
                                        <span className="d-none d-md-block col-1 px-0 text-center color--text">
                                            <button className="btn btn-light">
                                                <small><i className="fas fa-bell"></i></small>
                                            </button>
                                        </span>
                                                    
                                    </span>
                                </span>
                            </span>   
                        </div>
                    </div>
                            
            </React.Fragment>

        );

}

export default Info;