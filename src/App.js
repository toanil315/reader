import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo/Logo';
import Header from './components/Header/Header';
import Container from './components/Container.js/Container';
import Loading from './components/Loading/Loading';
import File from './components/File/File';
import Folder from './components/Folder/Folder';
import Player from './components/Player/Player';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '-20px'}}>
          <File />
          <File />
          <File />
          <File />
        </div>
      </Container>
      <Player />
    </div>
  );
}

export default App;
