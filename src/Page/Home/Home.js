import React from 'react'
import Header from '../../components/Header/Header';
import Container from '../../components/Container.js/Container';
import Loading from '../../components/Loading/Loading';
import File from '../../components/File/File';
import Folder from '../../components/Folder/Folder';
import Player from '../../components/Player/Player';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <Header />
        <Container>
            <Outlet />
        </Container>
        <Player />
    </div>
  )
}
