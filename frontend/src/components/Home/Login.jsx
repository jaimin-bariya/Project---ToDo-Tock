import { useState, useContext } from "react";
import WelCome from "../../assets/icons/Home/welcome_back2.jpg"; // Replace with your login visual
import { useNavigate } from "react-router-dom";
import { AuthContext, HomeContext } from "../../Conexts/Contexts"; 
import { Home } from "lucide-react";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  


  const {closeLoginModal, changeAuthOptions} = useContext(HomeContext)

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch user ID from tables
      const userId = await login(usernameOrEmail, password);
      navigate(`/${userId}/home`); // Redirect to user's home
      
      
    } catch (error) {
      setError("Log in failed. Please try again."); // Display error
      console.log("error");
      console.log("from loginjsx", error);
      
      
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-out">
      <div className="bg-white p-8 rounded-lg shadow-lg relative w-full max-w-3xl mx-auto flex">
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <p className="mb-4">Welcome back! Please log in to your account.</p>

          <input
            type="text"
            placeholder="Username or Email"
            className="border rounded-lg p-2 w-full mb-4"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Your Password"
            className="border rounded-lg p-2 w-full mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="flex justify-between items-center">
            <button onClick={closeLoginModal} className="bg-red-500 text-white px-4 py-2 rounded-lg">Close</button>
            <button onClick={handleLogin} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 rounded-lg">Login</button>
          </div>

          <p className="mt-5">
            <span onClick={changeAuthOptions} className="text-orange-600 hover:text-orange-700 hover:font-semibold cursor-pointer">Sign up</span>, if you are new.
          </p>
        </div>

        <div className="w-1/2 p-4 flex items-center justify-center">
          <img src={WelCome} alt="Login Visual" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
