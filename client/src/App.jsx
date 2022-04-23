import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Home from "./screens/Home/Home";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </>
  );
}

export default App;
