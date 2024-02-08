import ThemeProvider from "./ThemeProvider.tsx";
import QueryClientProvider from "./QueryClientProvider.tsx";
import BrowserProvider from "./BrouserProvider.tsx";

export const Provider = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider>
        <BrowserProvider />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

// ! todo suspense
