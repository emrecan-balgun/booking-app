import Cities from './components/Cities';
import GuestLoves from './components/GuestLoves';
import Header from './components/Header';
import HeaderSection from './components/HeaderSection';
import SearchSection from './components/SearchSection';
import Subscribe from './components/Subscribe';
import Type from './components/Type';

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
          <Type />
          <GuestLoves />
          <Subscribe />
      </div>
    </div>
  );
}

export default App;