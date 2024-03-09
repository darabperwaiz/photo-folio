// import { db } from "./db/firestoreinit";
import "./App.css";
import Albumlist from "./components/Albumlist";
import Imagelist from "./components/Imagelist";
import { useState } from "react";
import Header from "./Nav/Header";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [id, setId] = useState();
  return (
    <div className="App">
      <Header />
      <div className="container">
        {isShow ? (
          <Imagelist setIsShow={setIsShow} id={id} />
        ) : (
          <Albumlist setId={setId} setIsShow={setIsShow} isShow={isShow} />
        )}
      </div>
    </div>
  );
}

export default App;
