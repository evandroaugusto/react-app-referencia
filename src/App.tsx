import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './core/styles/GlobalStyles';
import AppRoutes from './App.routes';
import { AuthenticationProvider } from './core/store/authentication.store';
import Layout from './shared/layout';

// initialize react query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 10, // 10 minutos
      staleTime: 1000 * 60 * 5, // 5 minutos
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthenticationProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </AuthenticationProvider>
    </QueryClientProvider>
  );
}
export default App;
