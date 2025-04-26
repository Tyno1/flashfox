import { Footer, NavBar } from "../molecules";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <NavBar />
      <main className="w-[100vw] min-h-[calc(100vh-6rem)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
