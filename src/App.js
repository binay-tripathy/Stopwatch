import "./App.scss";
import Layout from "./Components/Layout";
import Stopwatch from "./Components/Stopwatch";

function App() {
  return (
    <>
      <section class="preloader">
        <div class="spinner">
          <span class="spinner-rotate"></span>
        </div>
      </section>
      <Layout />
    </>
  );
}

export default App;
