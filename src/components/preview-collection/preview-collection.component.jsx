import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component.jsx';
const PreviewCollection= ({title, items}) => (
<div className='collection-preview'>
   <h1 className='title'>{title.toUpperCase()}</h1>
   <div className="preview">
   {
      items
      .filter((i,indx) => indx<4)
      .map(({id, ...iProps}) =>(
         <CollectionItem key={id} {...iProps}/>
      ))
   }
   

   </div>
</div>     
);
export default PreviewCollection;