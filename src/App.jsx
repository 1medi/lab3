import { artists } from './best-selling-music-artists';


function App() {
  const arrayDataItems = artists.map((artist, index) => (
    <li className="card" key={index}>
      <div className='info'>
      <img class="photo" src={artist.photo_url} alt={artist.name}  />
      <div className='text-container'>
      <h3>{artist.name}</h3>
        <p>{artist.country}</p>
        <p>{artist.albums_sold}</p>
      </div>

      </div>
    </li>
  ));

  return (
    <>
        <h1 className='title'>Best Selling Rap Artists</h1>
    <div className="app">
      <ul>
        {arrayDataItems}
      </ul>
    </div>
    </>

  );
}

export default App;
