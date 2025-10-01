import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { PRODUCTS_LIMIT } from "@/lib/constants";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <div>
      <ProductList
        data={latestProducts}
        title="Newest Arrivals"
        limit={PRODUCTS_LIMIT}
      />
    </div>
  );
};

export default Homepage;
