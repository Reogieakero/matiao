// frontend/src/components/news/NewsCard.jsx
import PropTypes from "prop-types";

const NewsCard = ({ image, title, date, description }) => {
  return (
    <div className="news-card">
      <div className="news-image">
        {/* This <img> element uses width: 100% in your CSS to span the full width of its parent (.news-card),
            and the .news-card has overflow: hidden, ensuring no side padding for the image. */}
        <img src={image} alt={title} />
      </div>

      <div className="news-content">
        <h3 className="news-title">{title}</h3>
        <p className="news-date">{date}</p>
        <p className="news-description">{description}</p>
        <button className="news-readmore-btn">
          Read More <span className="arrow-icon">→</span>
        </button>
      </div>
    </div>
  );
};

// Prop types definition
NewsCard.propTypes = {
  // Assuming the imported image variable resolves to a string URL
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default NewsCard;