import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import CreatePostPage from "../pages/CreatePostPage/CreatePostPage";
import DetailsPostPage from "../pages/DetailsPostPage/DetailsPostPage";
import HomePage from "../pages/HomePage/HomePage";
import { ROUTES } from "../routes";

function Navigation() {
  return (
    <Routes>
      <Route path={ROUTES.HOME_PAGE} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.CREATE_PAGE} element={<CreatePostPage />} />
        <Route path={ROUTES.DETAILS_PAGE} element={<DetailsPostPage />} />
      </Route>
    </Routes>
  );
}

export default Navigation;
