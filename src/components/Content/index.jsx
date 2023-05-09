import { Routes, Route } from "react-router";

import Dashboard from "../../screens/Dashboard/index.jsx";
import Analytics from "../../screens/Analytics/index.jsx";

export default function Content() {
  return (
    <Routes>
        <Route path="/" Component={Dashboard} exact></Route>
        <Route path="/analytics" Component={Analytics}></Route>
    </Routes>
  );
}
