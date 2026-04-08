import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Prologue from "./pages/Prologue";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";
import Article1 from "./pages/Article1";
import ArticleHaircut from "./pages/ArticleHaircut";
import ArticleIranUS from "./pages/ArticleIranUS";
import ArticleMiddleEast from "./pages/ArticleMiddleEast";
import ArticleIranSuez from "./pages/ArticleIranSuez";
import Article1967 from "./pages/Article1967";
import ArticleHostages from "./pages/ArticleHostages";
import ArticleIranIraq from "./pages/ArticleIranIraq";
import ArticleKuwait from "./pages/ArticleKuwait";
import ArticleKosovo from "./pages/ArticleKosovo";
import ArticleIraqWar from "./pages/ArticleIraqWar";
import ArticleArabSpring from "./pages/ArticleArabSpring";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
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
            <Route path="/article/iran-us-conflict" element={<ArticleIranUS />} />
            <Route path="/article/refuge-to-regional-fracture" element={<ArticleMiddleEast />} />
            <Route path="/article/occupation-to-nationalization" element={<ArticleIranSuez />} />
            <Route path="/article/1967-1973-occupation" element={<Article1967 />} />
            <Route path="/article/revolution-hostages-iran" element={<ArticleHostages />} />
            <Route path="/article/iran-iraq-war-militarization" element={<ArticleIranIraq />} />
            <Route path="/article/kuwait-sanctions-enforcement" element={<ArticleKuwait />} />
            <Route path="/article/kosovo-illegal-but-legitimate" element={<ArticleKosovo />} />
            <Route path="/article/911-to-iraq-preventive-war" element={<ArticleIraqWar />} />
            <Route path="/article/arab-spring-bahrain-silence" element={<ArticleArabSpring />} />

            {/* Legacy redirects */}
            <Route path="/chapter-1" element={<Chapter1 />} />
            <Route path="/chapter-2" element={<Chapter2 />} />
            <Route path="/article-tbml" element={<Article1 />} />
            <Route path="/article-haircut" element={<ArticleHaircut />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
