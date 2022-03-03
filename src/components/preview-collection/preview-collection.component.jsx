import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component.jsx";
import { connect } from "react-redux";



const PreviewCollection = ({ title, items ,screenSize}) => (
  <div className="collection-preview">
    {console.log(screenSize)}
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      { 
      items
        .filter((i, indx) => (
          // screenSize >= 800 ? 
          indx < 4
          // :
          // indx< 3
        ) )
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))
        }
    </div>
  </div>
);
const mapStateToProps = (state) =>({
  screenSize : state.scrSize.screen
}
)
export default connect(mapStateToProps)(PreviewCollection);


