import { RouterProvider } from "react-router-dom";
// import router from "./routes";
import router from "./routes-lazy";
import { Suspense } from "react";
import { ReactCsspin } from "react-csspin";
import 'react-csspin/dist/style.css';

function App() {
  return (
    <Suspense fallback={ <ReactCsspin /> }>
      <RouterProvider router={ router } />
    </Suspense>
  );
}

export default App;