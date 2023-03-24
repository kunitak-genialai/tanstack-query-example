import { createRoot } from 'react-dom/client';
import { worker } from './mocks/browser';
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { router } from "./AppRoutes";

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  worker.start().catch((err) => console.log(err));
}

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools  initialIsOpen={false} />
  </QueryClientProvider>
/* https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
*/
);