import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component.jsx";
import { withRouter } from "react-router-dom";

const PreviewCollection = ({ title, items, ...props }) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() =>
        props.history.push(`${props.match.url}/${title.toLowerCase()}`)
      }
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items
        .filter((i, indx) => indx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(PreviewCollection);
