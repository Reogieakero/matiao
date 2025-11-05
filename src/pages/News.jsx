// frontend/src/pages/News.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsHeroSection from '../components/news/NewsHeroSection';
import NewsListSection from '../components/news/NewsListSection';
import '../css/News.css';

const News = () => {
  return (
    <div className="news-page">
      <Header />
      <main>
        <NewsHeroSection />
        <NewsListSection />
      </main>
      <Footer />
    </div>
  );
};

export default News;
