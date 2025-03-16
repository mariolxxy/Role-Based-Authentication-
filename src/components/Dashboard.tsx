import { useAuth } from "./AuthProvider";

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="dashboardContainer">
      <header className="top-nav">
        <div className="WelcomeText">
          <h1 className="dashboardheader">Dashboard</h1>
          {user?.role === "Admin" && (
            <p>Welcome Admin! Here are your controls.</p>
          )}
          {user?.role === "Editor" && (
            <p>Welcome Editor! You can edit content here.</p>
          )}
          {user?.role === "Viewer" && (
            <p>Welcome Viewer! Here are your reports.</p>
          )}
        </div>

        <input type="text" placeholder="Search..." />
      </header>
      <div className="dashboard">
        <aside className="sidebar">
          <ul>
            <li>
              <a href="#">🏠 Home</a>
            </li>
            <li>
              <a href="#">📊 Analytics</a>
            </li>
            <li>
              <a href="#">📁 Reports</a>
            </li>
            <li>
              <a href="#">⚙️ Settings</a>
            </li>
          </ul>
        </aside>

        <main className="main-content">
          <section className="overview">
            <Card title="Total Sales" value="$10,200" />
            <Card title="New Users" value="1,230" />
            <Card title="Orders" value="345" />
            <Card title="Revenue" value="$50,450" />
          </section>

          <section className="recent-activity">
            <h2>Recent Activity</h2>
            <ul>
              <li>✅ New users signed up</li>
              <li>📦 Order #2345 was shipped</li>
              <li>💰 Payment of $500 received</li>
              <li>⚠️ System maintenance scheduled</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

// Define types for Card props
interface CardProps {
  title: string;
  value: string;
}

// Reusable Card Component
function Card({ title, value }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default Dashboard;
