import { useParams } from 'react-router-dom';
import ProductCategory from './ProductCategory';

const ProductCategoryWrapper = () => {
    const { CategoryName } = useParams();

    return <ProductCategory prodCategory = {CategoryName}/>;
};

export default ProductCategoryWrapper;
