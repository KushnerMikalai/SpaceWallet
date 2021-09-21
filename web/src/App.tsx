import { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { useActions } from "./hooks/useActions";
import appStyles from "./assets/styles/modules/App.module.css";

const App = () => {
  const { fetchApp, fetchCheckTokens } = useActions();

  const initialApp = async () => {
    await fetchCheckTokens();
    fetchApp();
  };

  useEffect(() => {
    initialApp();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={appStyles.app}>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
