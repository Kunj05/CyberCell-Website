import Hero from '../components/Hero';
import ToolsShowcase from '../components/ToolsShowcase/Tools';
import ImageSlider from '../components/ImageSlider';
import Stats from '../components/Stats';

const Home = () => {
  return (
    <>
      <Hero />
      <ToolsShowcase />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white mb-12 text-center">
          Previous Events
        </h2>
        <ImageSlider />
        <Stats />
      </div>
    </>
  );
};

export default Home;
