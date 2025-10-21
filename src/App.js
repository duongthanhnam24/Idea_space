import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { router } from "./routers";
import DefaultLayout from "./layouts/DefaultLayout";
import FloatingContactButtons from "./components/ContactIcon/ContactIcon";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <FloatingContactButtons/>
          <Routes>
            {router.map((item) => {
              return (
                <Route key={item.path} path={item.path} element={
                  <DefaultLayout>
                    <item.component />
                  </DefaultLayout>

                } />
              )
            })}

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
