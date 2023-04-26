import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import Tweets from 'pages/Tweets/Tweets';


export const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
    </Routes>
    </div>
  );
};


//  {/* <Route path="movies/:movieId" element={<MovieDetails />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} /> */}