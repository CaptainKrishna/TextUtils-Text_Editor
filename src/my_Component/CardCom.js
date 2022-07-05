import React from "react";
const products = {
  id: 1,
  name: "Basic Tee",
  href: "#",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  imageAlt: "Front of men's Basic Tee in black.",
  price: "250₹",
  color: "Black",
};

export default function CardCom() {
  return (
    <>
      <section className="my-5 md:mx-48 sm:mx-12" key={products.id}>
        <div className="p-12">
          <heading className="text-black font-bold text-5xl ">
            <h2 className="my-12 ">Best Products</h2>
          </heading>
          <div className=" h-1/3 w-full flex flex-auto">
            <div className=" shadow-md w-1/2  rounded-2xl border-lime-100">
              <img
                src={products.imageSrc}
                className="overflow-hidden  "
                alt=""
              />
            </div>
            <div className=" w-1/2 ml-5">
              <p className="text-3xl font-bold px-5 mt-48 py-5">
                {products.name}
              </p>
              <p className="text-xl justify-center m-5">{products.imageAlt}</p>
              <p className="text-3xl  m-5">{products.price}</p>
              <button className="btn w-2/6 mt-5 ml-12">Add to Cart</button>
              <button className="btn w-2/6">buy</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
