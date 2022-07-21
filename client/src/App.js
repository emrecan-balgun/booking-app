import Category from './components/Category';
import Header from './components/Header';
import HeaderSection from './components/HeaderSection';
import SearchSection from './components/SearchSection';

function App() {
  return (
    <div className="main">
      <div className="bg-blue-800">
          <Header />
          <Category />
          <HeaderSection />
          <SearchSection />
        </div>
    </div>
  );
}

export default App;