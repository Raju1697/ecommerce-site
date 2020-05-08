import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PreviewCollection from '../preview-collection/preview-collection.component'
import '../collection-overview/collection-overview.style.scss';
import {selectCollections} from '../../redux/shop/shop.selectors';


const CollectionOverview = ({collections}) => (
    <div className="collections-overview">
         {
                collections.map(({id, ...otherCollectionProps}) =>(
                <PreviewCollection key={id} {...otherCollectionProps}/>
                ))
            }
    </div>
)

const mapStateToProps = createStructuredSelector ({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);
