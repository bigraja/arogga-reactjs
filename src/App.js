import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import LabTest from "./pages/LabTest";
import Beauty from "./pages/Beauty";
import HealthCare from "./pages/HealthCare";
import Account from "./pages/Account";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lab-test" element={<LabTest />} />
          <Route path="beauty" element={<Beauty />} />
          <Route path="health-care" element={<HealthCare />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
