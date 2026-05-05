import { createRoot } from "react-dom/client";
import './assets/tailwind.css';
import PageHeader from "./components/PageHeader";
import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import Dashboard from './pages/Dashboard';
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root"))
    .render(
      <BrowserRouter>
    <div className="flex min-h-screen">
        <Sidebar />
        <PageHeader/>
      <div className="flex-1 flex flex-col pl-20 md:pl-64">
        <Header />
        <main className="p-4 md:p-8">
          <Dashboard />
        </main>
      </div>
    </div>
    </BrowserRouter>
);