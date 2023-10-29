import { PageLayout, Header, Main } from "./components";

function App() {
  return (
    <>
      <PageLayout header={<Header />} main={<Main></Main>} />
    </>
  );
}

export default App;
