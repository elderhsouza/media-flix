import { ReactElement } from "react";
import Navigation from "../components/Navigation";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="container">{children}</main>
      <footer></footer>
    </>
  );
}
