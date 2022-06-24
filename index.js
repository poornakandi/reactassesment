import { createRoot } from "react-dom/client";
import ParentComponent from "./parentComponent";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<ParentComponent />);