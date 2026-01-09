import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/ui/modem-animated-footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center px-4">
          <h1 className="mb-4 text-7xl font-bold text-[#2563EB]">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Oops! Page not found</h2>
          <p className="mb-8 text-muted-foreground max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild className="bg-[#2563EB] hover:bg-[#2563EB]/90">
            <Link to="/">
              Return to Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
