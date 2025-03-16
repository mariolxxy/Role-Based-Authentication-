import { useAuth } from "./AuthProvider";

const Settings: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="settingContainer">
      <h1 className="SettingHeader">Settings</h1>
      <p>Welcome {user?.username}, you can view and edit this settings.</p>
    </div>
  );
};

export default Settings;
