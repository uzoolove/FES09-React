import { RouterProvider } from "react-router-dom";
// import router from "./routes";
import router from "./routes-lazy";
import { Suspense } from "react";
import { ReactCsspin } from "react-csspin";
import 'react-csspin/dist/style.css';
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={ <ReactCsspin /> }>
        <RouterProvider router={ router } />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;