import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black pt-20">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold mb-4 text-yellow-400">404</h1>
        <p className="text-2xl text-gray-300 mb-8">Page Not Found</p>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Feel free to return to our home page to explore our services.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
