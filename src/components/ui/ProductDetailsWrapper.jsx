import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const ProductDetailsWrapper = () => {
    // Note that the name of the parameter must match the name defined in the route path
    const { ProductCategory, id } = useParams();
    // console.log('This is the id', id);
    // console.log('This is the ProductCategory', ProductCategory);


    return <ProductDetails ProdCategory = {ProductCategory} itemId= {id}/>;
};

export default ProductDetailsWrapper;