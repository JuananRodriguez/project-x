import React from "react";
import { Layout } from "./components/layout/Layout";
import { Routes, Route, Link } from "react-router-dom";
import { Main as UsersManagement } from "./features/users-management/view";
import { Main as UserProfile } from "./features/user-profile/view";
import { Main as TranslationsManagement } from "./features/translations-management/view";
import { ReactiveTitle } from "./components/reactive-title/ReactiveTitle";

export function App() {
  return (
    <Layout
      sidebar={
        <Layout.Sidebar>
          <nav>
            <ul>
              <li>
                <Link to="/a">Users management</Link>
              </li>
              <li>
                <Link to="/b">User profile</Link>
              </li>
              <li>
                <Link to="/c">Translation management</Link>
              </li>
            </ul>
          </nav>
        </Layout.Sidebar>
      }
      footer={
        <Layout.Footer>
          <p>&copy; 2023 Backoffice Example</p>
        </Layout.Footer>
      }
      header={
        <Layout.Header>
          <ReactiveTitle.Listener />
        </Layout.Header>
      }
      main={
        <Layout.Main>
          <Routes>
            <Route path="/a" element={<UsersManagement />} />
            <Route path="/b" element={<UserProfile />} />
            <Route path="/c" element={<TranslationsManagement />} />
          </Routes>
        </Layout.Main>
      }
    />
  );
}
