import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import { RecoilRoot } from "recoil";
import useThemeStore from "@zustand/themeStore.mjs";

function App(){

  const { isDarkMode } = useThemeStore();

  if(isDarkMode){
    document.documentElement.classList.add('dark');
  }else{
    document.documentElement.classList.remove('dark');
  }

  return (
    <RecoilRoot>
      <RouterProvider router={ router } />
    </RecoilRoot>
  );
}

export default App;