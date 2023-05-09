import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../../Page/Home'));
const Tweets = lazy(() => import('../../Page/Tweets'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
