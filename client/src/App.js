import Cities from './components/Cities';
import Header from './components/Header';
import HeaderSection from './components/HeaderSection';
import SearchSection from './components/SearchSection';

function App() {
  return (
    <div className="main">
      <div className="bg-blue-900">
          <Header />
          <HeaderSection />
          <SearchSection />
      </div>
      <div className="content">
          <Cities />
      </div>
    </div>
  );
}

export default App;