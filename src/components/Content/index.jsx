import { Routes, Route } from "react-router";

import Dashboard from "../../screens/Dashboard/index.jsx";

export default function Content() {
  return (
    <Routes>
        <Route path="/" Component={Dashboard} exact></Route>
    </Routes>
  );
}
