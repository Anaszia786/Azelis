import { productData } from '@/utils/productData';
import ProductDetails from '@/app/components/common/ProductDetails';

const ProductSpecs = () => {
  return (
    <div>
      <ProductDetails product={productData} />
    </div>
  );
};

export default ProductSpecs;
