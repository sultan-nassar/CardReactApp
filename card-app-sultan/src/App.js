import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import ThemeProvider from "./providers/ThemeProvider";
import SnackbarProvider from "./providers/SnackbarProvider";
import UserProvider from "./users/providers/UserProvider";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <SnackbarProvider>
          <ThemeProvider>
            <Layout>
              <Router />
            </Layout>
          </ThemeProvider>
        </SnackbarProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
