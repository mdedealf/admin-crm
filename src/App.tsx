import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  const handleLogout = () => {
    // Add real logic here
    console.log("Logging out...");
  };

  const handleMenuItemClick = (item: { label: string; href: string }) => {
    // Add real logic here
    console.log("Navigating to:", item.label);
  };

  const user = {
    name: "John Doe",
    email: "john@example.com",
    image: "https://ui-avatars.com/api/?name=John+Doe",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar brand="Sales CRM" />
      <Sidebar
        onMenuItemClick={handleMenuItemClick}
        onLogout={handleLogout}
        user={user}
      />
      <main className="ml-64 py-24 px-12 pb-8 bg-gray-0 min-h-screen">
        {/* Main content will go here */}
      </main>
    </div>
  );
};

export default App;
