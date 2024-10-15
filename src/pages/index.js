
import Card from "./components/Card"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}> 
    <div class="container mx-auto">
    <Card/>
    </div>
    </QueryClientProvider>
    
  );
}

