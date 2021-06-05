// * Styling
import "./App.css";

// * Components
import AppFrame from "./components/AppFrame";
import Layout from "./components/Layout";

// * Context
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <AppFrame />
      </Layout>
    </AuthProvider>
  );
}

export default App;
