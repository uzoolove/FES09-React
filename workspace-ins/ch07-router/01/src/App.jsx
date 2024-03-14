import { useEffect, useState } from 'react';
import Header from './Header';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

function App(){
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = e => {
      setPath(e.destination.url.split(location.host).pop());
    };
    window.navigation.addEventListener('navigate', handlePopState);
    return () => {
      window.navigation.removeEventListener('navigate', handlePopState);
    };
  }, []); // 최초 한번만 실행

  return (
    <>
      <Header />

      { path === '/' && <Home /> }
      { path === '/page1' && <Page1 /> }
      { path === '/page2' && <Page2 /> }
      
    </>
  );
}

export default App;