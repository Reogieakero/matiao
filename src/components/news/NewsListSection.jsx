// frontend/src/components/news/NewsListSection.jsx
import NewsCard from './NewsCard';
import Matiao from '../../assets/Matiao.jpg';

const sampleNews = [
  {
    id: 1,
    title: "Barangay Clean-Up Drive Scheduled",
    date: "November 10, 2025",
    description: "Join us this Saturday for a community clean-up to promote environmental care.",
    image: Matiao, // Matiao image used
  },
  {
    id: 2,
    title: "New Barangay Hall Renovation Completed",
    date: "October 28, 2025",
    description: "Our newly renovated barangay hall is now open to serve residents better.",
    image: Matiao, // Matiao image used
  },
  {
    id: 3,
    title: "Vaccination Drive Extended",
    date: "October 22, 2025",
    description: "COVID-19 vaccination program extended for senior citizens and minors.",
    image: Matiao, // Matiao image used
  },
];

const NewsListSection = () => {
  return (
    <section className="news-list-section">
      <div className="container">
        <h2 className="section-title">Recent Updates</h2>
        <div className="news-grid">
          {sampleNews.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsListSection;