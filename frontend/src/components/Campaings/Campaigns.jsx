import "./Campaigns.css";
import CampaignItem from "./CampaignItem";

const Campaigns = () => {
  return (
    <section className="campaings">
      <div className="container">
        <div className="campaings-wraper">
          <CampaignItem />
          <CampaignItem />
        </div>
        <div className="campaings-wraper">
          <CampaignItem />
          <CampaignItem />
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
