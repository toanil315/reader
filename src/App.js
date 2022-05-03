import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Page/Home/Home';
import FolderList from './components/FolderList/FolderList';
import FileList from './components/FileList/FileList';
import Loading from './components/Loading/Loading';

function App() {
  return (
    <BrowserRouter>
      <Loading />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<FolderList />} />
          <Route path="folders/:date" element={<FileList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
