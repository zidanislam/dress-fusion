import React, { useEffect, useState } from "react";

const ProductImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (imgs.length > 0) {
      setMainImage(imgs[0]);
    }
  }, [imgs]);
  return (
    <div className="flex align-top flex-col-reverse gap-3">
      <div className="flex flex-wrap gap-3">
        {imgs.map((current, index) => {
          return (
            <img
              src={current.url}
              alt={current.fileName}
              key={index}
              onClick={() => setMainImage(current)}
              className="w-24 flex align-middle justify-center"
            />
          );
        })}
      </div>
      <div>
      {mainImage ? (
      <img src={mainImage.url} alt="" />
    ) : (
      <p>Loading...</p>
    )}
      </div>
    </div>
  );
};

export default ProductImage;
