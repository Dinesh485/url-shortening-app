import Nav from "./components/nav";

function App() {
  return (
    <div className="App font-poppins">
      <Nav />
      <section>
        <div className="wrapper">
          <img src={require("./images/illustration-working.svg").default} alt="illustration" className="block w-96" />
          <div className="flex flex-col justify-center items-center text-center gap-5">
            <h1 className="text-[40px] font-bold  text-Very-Dark-Violet">More than just shorter links</h1>
            <p className="text-Grayish-Violet">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
            <a href="/" className="btn">
              Sign Up
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
