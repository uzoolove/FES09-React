import { RouterProvider } from "react-router-dom";
// import router from "./routes";
import router from "./routes-lazy";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={ <div>로딩중...</div> }>
      <RouterProvider router={ router } />
    </Suspense>
  );
}

export default App;