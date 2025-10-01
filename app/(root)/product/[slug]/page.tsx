import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import { Product } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProductPrice from "@/components/shared/product/product-price";
import { Card, CardContent } from "@/components/ui/card";
import ProductImages from "@/components/shared/product/product-images";

// Good practice: Separate data fetching logic and add clear TypeScript types for better maintainability and readability.

// Async function to fetch a product by slug
const fetchProductBySlug = async (slug: string): Promise<Product> => {
  // Call the backend or database to get the product
  const product = await getProductBySlug(slug);

  // If product is not found, trigger Next.js's notFound() to show 404 page
  if (!product) {
    notFound();
  }

  // Return the product (TypeScript knows it's a Product type)
  return product;
};

// Main page component for product details
const ProductDetailsPage = async ({
  params,
}: {
  // This line defines the type of the 'params' prop: it must be a Promise containing an object with a 'slug' property of type string.
  params: Promise<{ slug: string }>;
}) => {
  // Destructure slug from params (awaiting the Promise)
  const { slug } = await params;

  // Fetch the product using the helper function
  const product = await fetchProductBySlug(slug);

  // Render the product details
  return (
    <div>
      {/* 
        Product Details Section
        - Uses a responsive grid: 1 column on mobile, 5 columns on medium screens and up.
        - Columns: Images | Details | Action (Add to Cart)
      */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Images Column (spans 2 columns on md+) */}
          <div className="col-span-2">
            <ProductImages images={product.images} />
          </div>
          {/* Details Column (spans 2 columns on md+) */}
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              {/* Brand and Category */}
              <p>
                {product.brand} {product.category}
              </p>
              {/* Product Name */}
              <h1 className="h3-bold">{product.name}</h1>
              {/* Product Rating and Number of Reviews */}
              <p>
                {Number(product.rating)} of {product.numReviews} Reviews
              </p>
              {/* Product Price (styled) */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <ProductPrice
                  value={Number(product.price)}
                  className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
                />
              </div>
            </div>
            {/* Product Description */}
            <div className="mt-10">
              <p className="font-semibold">Description</p>
              <p>{product.description}</p>
            </div>
          </div>
          {/* Action Column (Add to Cart, Price, Stock Status) */}
          <div>
            <Card>
              <CardContent className="p-4">
                {/* Price Row */}
                <div className="mb-2 flex justify-between">
                  <div>Price</div>
                  <div>
                    <ProductPrice value={Number(product.price)} />
                  </div>
                </div>
                {/* Stock Status Row */}
                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                  {product.stock > 0 ? (
                    <Badge variant="outline">In Stock</Badge>
                  ) : (
                    <Badge variant="destructive">Out Of Stock</Badge>
                  )}
                </div>
                {/* Add to Cart Button (only if in stock) */}
                {product.stock > 0 && (
                  <div className="flex-center">
                    <Button className="w-full">Add To Cart</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsPage;
