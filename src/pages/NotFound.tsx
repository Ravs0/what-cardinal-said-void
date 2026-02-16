import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { TriangleAlert, MoveLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Accessing non-existent coordinate:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6">
        <div className="relative mb-12">
          <TriangleAlert className="w-24 h-24 text-cardinal opacity-20 animate-pulse" />
          <div className="absolute inset-0 bg-cardinal/10 blur-[80px] rounded-full" />
        </div>

        <div className="text-center space-y-6 max-w-lg">
          <h1 className="text-7xl font-serif text-white tracking-tighter">404</h1>
          <p className="text-xl md:text-2xl font-serif text-indigo-100/60 italic leading-relaxed">
            "The coordinate you requested has been redacted from the archive."
          </p>
          <p className="text-xs font-mono text-cardinal tracking-[0.4em] uppercase pt-4">
            Error Code: VOID_MISSING_SECTOR
          </p>
        </div>

        <div className="mt-20">
          <Link to="/" className="group flex items-center gap-3 text-white border border-white/10 px-8 py-4 glass hover:border-cardinal/50 transition-all duration-500">
            <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Return to Hub</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
