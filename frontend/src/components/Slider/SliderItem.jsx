import PropTypes from "prop-types";

const SliderItem = ({ imageSrc }) => {
  return (
    <div className="slider-item fade">
      <div className="slider-image">
        <img src={imageSrc} alt="" className="img-fluid" />
      </div>
      <div className="container">
        <p className="slider-title">SUMMER 2024</p>
        <h2 className="slider-heading">Sace up to 70%</h2>
        <a href="#" className="btn btn-primary btn-lg">
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default SliderItem;

SliderItem.propTypes = {
  imageSrc: PropTypes.string,
};
