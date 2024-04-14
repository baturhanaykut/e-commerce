import "./Products.css";
import ProductItem from "./ProductItem";
const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Feature Products</h2>
          <p>Summer Collection New Modern Desing</p>
        </div>

        <div className="product-wrapper product-carousel">
          <div className="glide__track">
            <ul className="product-list glide__slides" id="product-list">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </ul>
            <div className="glide__arrows">
              <button className="glide__arrow glide__arrow--left">
                <i className="bi bi-chevron-left"></i>
              </button>
              <button className="glide__arrow glide__arrow--right">
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
