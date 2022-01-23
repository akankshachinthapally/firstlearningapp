import { Routes, Route, useParams, Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
const Explore = () => {
  return (
    <div>
      <Link to="id">
        <p>hii</p>
      </Link>
      <h1>Explore</h1>
      <Outlet />
    </div>
  );
};
const Subscriptions = () => {
  return (
    <div>
      <h1>Subscriptions</h1>
    </div>
  );
};
const Library = () => {
  return (
    <div>
      <h1>Library</h1>
    </div>
  );
};

const Customroutes = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="explore" element={<Explore />}>
        <Route path="id" element={<p>Nested Explore</p>} />
      </Route>
      <Route path="subscriptions" element={<Subscriptions />} />
      <Route path="library" element={<Library />} />
    </Routes>
  );
};

export default Customroutes;
