import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
