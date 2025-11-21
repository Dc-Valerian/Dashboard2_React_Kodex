import { useUser } from "../context/UserContext";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-blue-900 p-8">
      <h1 className="text-3xl font-bold mb-4">
        Hi, {user?.name || "Guest"}! 👋
      </h1>
      <p className="text-lg">Welcome to your dashboard.</p>
    </div>
  );
}
