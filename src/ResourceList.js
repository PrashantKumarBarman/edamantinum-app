import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { startCase } from 'lodash';

function ResourceList(props) {
    
    let [inProgress, setInProgress] = useState(true);

    /* Total 10 gradients will be used */

    useEffect(() => {
        if(props.resources && props.resources.length > 0) {
            setInProgress(false);
        }
        else {
            setInProgress(true);
        }
    }, [props.resources, inProgress]);

    function Resource(props) {
        let gradient = props.index < 10 ? ( "g" + (props.index + 1).toString() ) : ( "g" + ((props.index % 10) + 1).toString() );
        let resourceClass = "resource-container " + gradient;
        useEffect(() => {
            console.log(resourceClass);
        });
        return (
            <li className={ resourceClass }>
                <div className="row d-flex align-items-center">
                <div className="col-md-12">
                <h2 style={ { color: 'Cornsilk', fontFamily: 'Roboto' }} className="resource-title">
                {startCase(props.data.title)}
                </h2>
                </div>
                </div>

                <div className="row d-flex align-items-center pb-2">
                <div className="col-md-1">
                <strong style={ { color: 'AliceBlue', fontFamily: 'Roboto' }}>Link:</strong>
                </div>
                <div style={ { display: 'flex', flexWrap: 'wrap', paddingTop: '1px', color: 'Beige', fontFamily: 'Roboto' } } className="col-md-10">
                <div>
                {props.data.link}
                </div>
                
                <div>
                <a className="resource-url" href={ "http://" + props.data.link }>Visit</a>
                </div>
                </div>
                </div>
                
                <div className="row d-flex align-items-center">
                <div className="col-md-1">
                <strong style={ { color: 'AliceBlue', fontFamily: 'Roboto' }}>Topics: </strong>
                </div>
                <div className="col-md-10">
                <div className = "topic-container">
                { props.data.topics ? props.data.topics.map((item, index) => 
                    <div style={ { fontFamily: 'Roboto' } } className="topic" key={index}>{startCase(item)}</div>
                ) : '' }
                </div>
                </div>
                </div>

            </li> 
        );
    }

    return (
        <div style = { { position: 'relative', height: '100%'} }>
        { inProgress ? <Loader /> : '' }
        <ul style={ { width: '100%', listStyleType: 'none' } } className="resourcelist">
        { props.resources.map((resource, index) => (<Resource key = { resource.id } data = { resource } index = { index } />)) }
        </ul>
        </div>
    );
}

export default ResourceList;