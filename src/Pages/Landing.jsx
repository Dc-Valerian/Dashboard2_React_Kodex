import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-900 text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to MovieFinder</h1>
      <p className="text-lg mb-6">
        Discover movies, explore dashboards, and more!
      </p>
      <Link
        to="/sign-up"
        className="bg-blue-400 text-white px-6 py-3 rounded-lg"
      >
        Get Started
      </Link>
    </div>
  );
}
