import Header from './components/Header';
import styled from 'styled-components'
import Search from './components/Search';
import NewestRelease from './components/NewestRelease';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);

`

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <NewestRelease />
    </AppContainer>
  );
}

export default App