import React from "react";

import Dashboard from "features/dashboard/page";

export function App() {
  return <Dashboard />;
  // return (
  //   <Layout
  //     sidebar={
  //       <Layout.Sidebar>
  //         <nav>
  //           <SidebarWrapper>
  //             <NavigationItem to="/a" as={Link} label="Users management" />
  //             <NavigationItem to="/b" as={Link} label="User profile" />
  //             <NavigationItem
  //               to="/c"
  //               as={Link}
  //               label="Translation management"
  //             />
  //           </SidebarWrapper>
  //         </nav>
  //       </Layout.Sidebar>
  //     }
  //     footer={
  //       <Layout.Footer>
  //         <p>&copy; 2023 Backoffice Example</p>
  //       </Layout.Footer>
  //     }
  //     header={
  //       <Layout.Header>
  //         <ReactiveTitle.Listener />
  //       </Layout.Header>
  //     }
  //     main={
  //       <Layout.Main>
  //         <Routes>
  //           <Route path="/a" element={<UsersManagement />} />
  //           <Route path="/b" element={<UserProfile />} />
  //           <Route path="/c" element={<TranslationsManagement />} />
  //         </Routes>
  //       </Layout.Main>
  //     }
  // />
  // );
}
