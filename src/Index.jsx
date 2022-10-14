import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Auth/AuthContext";
import { SearchContextProvider } from "./Search/SearchContext";
import { DocumentContextProvider } from "./documents/DocumentsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <SearchContextProvider>
        <DocumentContextProvider>
          <App />
        </DocumentContextProvider>
      </SearchContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
