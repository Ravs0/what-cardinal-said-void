import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Prologue from "./pages/Prologue";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";
import Article1 from "./pages/Article1";
import ArticleHaircut from "./pages/ArticleHaircut";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prologue" element={<Prologue />} />
          <Route path="/chapter/prologue" element={<Prologue />} />
          <Route path="/chapter/that-is-law" element={<Chapter1 />} />
          <Route path="/chapter/law-for-whom" element={<Chapter2 />} />
          <Route path="/article/trade-based-money-laundering" element={<Article1 />} />
          <Route path="/article/haircut-vs-time" element={<ArticleHaircut />} />

          {/* Legacy/Redirect Routes */}
          <Route path="/chapter-1" element={<Chapter1 />} />
          <Route path="/chapter-2" element={<Chapter2 />} />
          <Route path="/article-tbml" element={<Article1 />} />
          <Route path="/article-haircut" element={<ArticleHaircut />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
