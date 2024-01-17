import SearchBar from './Components/SearchBar';
import BuzzWordTable from './Components/BuzzWordTable';

function App() {
  return (
    <div className="mx-10">
      <SearchBar />
      <h2 className='text-3xl font-semibold mt-10 mb-3'>Top BuzzWords</h2>
      <BuzzWordTable />
    </div>
  )
}

export default App;