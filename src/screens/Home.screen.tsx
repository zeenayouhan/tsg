import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../common/actions/common.actions';
import { productSelector } from '../common/selectors/product.selectors';

const Home: React.FC = () => {
  const dispatch = useDispatch();
 const productSelectors = useSelector(productSelector);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);


  return <div>Hi</div>;
};

export default Home;
