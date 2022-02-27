import './collections-overview.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../../components/preview-collection/preview-collection.component.jsx';
import {selectShopCollection} from '../../redux/shop/shop.selectors';


const CollectionsOverview = ({ collection}) => (
   <div className="collections-overview">
       {
         collection.map(({id, ...otherProp}) => (
            <PreviewCollection key={id} {...otherProp}/>
         ))
      }
   </div>
)
const mapStateToProps = createStructuredSelector({
   collection :  selectShopCollection
 })

 export default connect(mapStateToProps)(CollectionsOverview); 