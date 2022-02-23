import './collection-item.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

 const CollectionItem = ({item,add}) => {
   const { name,price, imageUrl} = item;
   
   return (<div className="collection-item">
   <div className="image"
   style={{
      backgroundImage : `url(${imageUrl})`
    }}/>

   <div className="collection-footer">
    <span className='name'>{name}</span>
    <span className='price'>${price}</span>

   </div >
   <CustomButton inverted onClick={()=> add(item) }> Add to cart</CustomButton>
</div>)
 }

 const mapDispatchToProps = dispatch => ({

   add : (item) => dispatch(addItem(item))
 })

 export default connect(null,mapDispatchToProps)(CollectionItem);