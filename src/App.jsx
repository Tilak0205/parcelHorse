import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import '/public/css/tailwind.css';

function App() {
  const { pathname } = useLocation();
  const isAuthPage = pathname === '/sign-in' || pathname === '/sign-up';

  return (
    <div className="font-inter">
      {!isAuthPage && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          {/* <Navbar routes={routes} /> */}
        </div>
      )}
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/sign-in" replace />} />
      </Routes>
    </div>
  );
}

export default App;
