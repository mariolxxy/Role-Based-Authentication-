import { useAuth } from "./AuthProvider";

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>

      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-info">
          <p>
            <strong>Username:</strong> {user?.username}
          </p>
          <p>
            <strong>Email:</strong> Not provided
          </p>
          <p>
            <strong>Phone:</strong> Not provided
          </p>
          <p>
            <strong>Location:</strong> Unknown
          </p>
          <p>
            <strong>Role:</strong> {user?.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
