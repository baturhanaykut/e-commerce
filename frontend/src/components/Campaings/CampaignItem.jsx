import "./CampaignItem.css";

const CampaignItem = () => {
  return (
    <div className="campaing-item">
      <h3 className="campaing-title">
        Fashion Month <br />
        Ready in Capital <br />
        Shop
      </h3>
      <p className="campaing-desc">
        Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
      </p>
      <a href="" className="btn btn-primary">
        View All
        <i className="bi bi-arrow-right"></i>
      </a>
    </div>
  );
};

export default CampaignItem;
