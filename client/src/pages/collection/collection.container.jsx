import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import CollectionPage from "./collection.component";

import withSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionPageContainer = (props) => {
  const { isLoading } = useSelector(createStructuredSelector({
    isLoading: selectIsCollectionsLoaded,
  }));

  const CollectionPageWithSpinner = withSpinner(CollectionPage);
  return <CollectionPageWithSpinner isLoading={!isLoading} {...props} />
}

export default CollectionPageContainer;