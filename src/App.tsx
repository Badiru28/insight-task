import { Layout } from "./components/Layout";
import { HomeScreen } from "./screens";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Layout>
        <HomeScreen />
      </Layout>
    </div>
  );
};

export default App;
