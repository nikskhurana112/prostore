"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * ProductImages component displays a main product image and a row of selectable thumbnails.
 * - Clicking a thumbnail sets it as the main image.
 * - Uses Next.js Image for optimized image rendering.
 *
 * Props:
 *   images: string[] - Array of image URLs for the product.
 */
const ProductImages = ({ images }: { images: string[] }) => {
  // State to track which image is currently active (displayed as main image)
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      {/* Main product image */}
      <Image
        src={activeImage}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />

      {/* Thumbnails row */}
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={image}
            // When a thumbnail is clicked, set it as the active image
            onClick={() => setActiveImage(images[index])}
            className={cn(
              "border mr-2 cursor-pointer hover:border-orange-600", // Base styles
              activeImage === image && "border-orange-500" // Highlight if active
            )}
          >
            {/* Thumbnail image */}
            <Image src={image} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
