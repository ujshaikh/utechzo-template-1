import React from 'react';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Dashboard from './pages/Dashboard';
import { LayoutProvider } from './layout/context/layoutcontext';
import FormLayout from './pages/ui/FormLayout';
import InputDemo from './pages/ui/InputDemo';
import FloatLabelDemo from './pages/ui/FloatLabelDemo';
import InvalidStateDemo from './pages/ui/InvalidStateDemo';
import ButtonDemo from './pages/ui/ButtonDemo';
import TableDemo from './pages/ui/TableDemo';
import ListDemo from './pages/ui/ListDemo';
import TreeDemo from './pages/ui/TreeDemo';
import PanelDemo from './pages/ui/PanelDemo';
import OverlayDemo from './pages/ui/OverlayDemo';
import MediaDemo from './pages/ui/MediaDemo';
import MenuDemo from './pages/ui/menu/MenuDemo';
import MessagesDemo from './pages/ui/MessagesDemo';
import FileDemo from './pages/ui/FileDemo';
import ChartDemo from './pages/ui/ChartDemo';
import MiscDemo from './pages/ui/MiscDemo';
import FreeBlocks from './pages/FreeBlocks';
import IconsDemo from './pages/IconsDemo';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import ErrorPage from './pages/auth/ErrorPage';
import AccessDeniedPage from './pages/auth/page';
import Crud from './pages/Crud';
import TimelineDemo from './pages/TimelineDemo';
import NotFoundPage from './pages/NotFoundPage';
import EmptyPage from './pages/EmptyPage';
import Documentation from './pages/DocumentationPage';

export default function App() {
  return (
    <LayoutProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Dashboard />} />

          {/* UI Routes */}
          <Route path='/ui/formlayout' element={<FormLayout />} />
          <Route path='/ui/input' element={<InputDemo />} />
          <Route path='/ui/floatlabel' element={<FloatLabelDemo />} />
          <Route path='/ui/invalidstate' element={<InvalidStateDemo />} />
          <Route path='/ui/button' element={<ButtonDemo />} />
          <Route path='/ui/table' element={<TableDemo />} />
          <Route path='/ui/list' element={<ListDemo />} />
          <Route path='/ui/tree' element={<TreeDemo />} />
          <Route path='/ui/panel' element={<PanelDemo />} />
          <Route path='/ui/overlay' element={<OverlayDemo />} />
          <Route path='/ui/media' element={<MediaDemo />} />
          <Route path='/ui/menu' element={<MenuDemo />} />
          <Route path='/ui/message' element={<MessagesDemo />} />
          <Route path='/ui/file' element={<FileDemo />} />
          <Route path='/ui/charts' element={<ChartDemo />} />
          <Route path='/ui/misc' element={<MiscDemo />} />
          {/* ./UI Routes */}

          {/* Sample Pages - Routes */}
          <Route path='/landing' element={<LandingPage />} />
          <Route path='/auth/login' element={<LoginPage />} />
          <Route path='/auth/error' element={<ErrorPage />} />
          <Route path='/auth/access' element={<AccessDeniedPage />} />
          <Route path='/crud' element={<Crud />} />
          <Route path='/timeline' element={<TimelineDemo />} />
          <Route path='/not-found' element={<NotFoundPage />} />
          <Route path='/empty' element={<EmptyPage />} />
          <Route path='/documentation' element={<Documentation />} />
          {/* ./Sample Pages - Routes */}

          {/* Other Routes */}
          <Route path='/blocks' element={<FreeBlocks />} />
          <Route path='/utilities/icons' element={<IconsDemo />} />
          {/* ./Other Page Routes */}
        </Route>
      </Routes>
    </LayoutProvider>
  );
}