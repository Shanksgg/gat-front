import { Routes, Route } from "react-router";

import Dashboard from "../../screens/dashboard/index.jsx";

function Content() {
  return (
    <Routes>
        <Route path="/" Component={Dashboard} exact></Route>
    </Routes>
  );
}

export default Content;
