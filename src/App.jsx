import { RouterProvider } from "react-router-dom";
import Demo from "./Demo";
import AuthProvider from "./AuthProvider/AuthProvider";
import router from "./RouterProvider/Router";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
