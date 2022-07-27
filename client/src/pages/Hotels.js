import SearchFilter from '../components/SearchFilter';
import SearchResult from '../components/SearchResult';

function Hotels() {
  return (
    <div className='container mx-auto flex'>
      <div className='w-1/4 bg-red-300'>
        <SearchFilter />
      </div>
      <div className='w-3/4 bg-blue-300'>
        <SearchResult />
      </div>
    </div>
  )
}

export default Hotels