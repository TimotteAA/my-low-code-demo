import { useRef } from "react";

import Material from "./container/Material";
import Toolbar from "./container/Toolbar";
import WinCenter from "./container/WinCenter";

import "./app.scss";

function App() {
  const materialRef = useRef<HTMLDivElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={materialRef} className="material">
        <Material />
      </div>
      <div className="content">
        <WinCenter />
      </div>
      <div ref={toolbarRef} className="action">
        <Toolbar />
      </div>
    </>
  );
}

export default App;
