import { createRoot } from "react-dom/client";
import './index.css'
import { Header } from "../Components/header";
import { Footer } from "../Components/footer";
import { Mainbody } from "../Components/mainBody";

const root = createRoot(document.getElementById("root"));

root.render(
  <App />  
);

function App(){
  return (   
  <>
    <Header />
    <Mainbody />
    <Footer />
  </>

  )
}