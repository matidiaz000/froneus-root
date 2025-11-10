import Layout from "./layout";
import AppRoutes from "./routes";
import "primereact/resources/themes/lara-light-cyan/theme.css";

const App = () => {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
};

export default App;
