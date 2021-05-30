import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import MyCertificate from "./pages/my_certificate/my_certificate";
import ScanCode from "./pages/scan_code/scan_code";
import AddCertificateId from "./pages/add_certificate_id/add_certificate_id";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/certificate">
          <MyCertificate />
        </Route>
        <Route path="/add-certificate-id">
          <AddCertificateId />
        </Route>
        <Route path="/scan">
          <ScanCode />
        </Route>
        <Route>404</Route>
      </Switch>
    </Router>
  );
}

export default App;
