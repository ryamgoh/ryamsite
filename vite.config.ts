import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [
//     react({
//       jsxRuntime: "classic",
//     }),
//   ],
// });
