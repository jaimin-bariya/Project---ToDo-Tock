// icons and imgs
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import WelCome from "../../assets/icons/Home/sign.jpg"; // Replace with your signup visual
import { AuthContext, HomeContext } from "../../Conexts/Contexts";


const SignUp = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedGender, setSelectedGender] = useState("Select Gender");
  const [isDisable, setIsDisable] = useState(false);
  const [error, setError] = useState("");


  
  const {closeModal, changeAuthOptions} = useContext(HomeContext)


  const navigate = useNavigate();

  const handleGenderChange = (e) => setSelectedGender(e.target.value);


  // Get the signup function from AuthContext
  const {signup} = useContext(AuthContext)






  const handleSignUp = async (e) => {
    e.preventDefault();


    try {
      const userId =  await signup(username, email, fullName, password, selectedGender)

      navigate(`/${userId}/home`); // Redirect to /userId/home

    } catch (err) {
      console.log(err);
      
      console.log("from loginjsx", );
      setError(err.response.data.error || "Sign up failed. Please try again.");
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-out">
        <div className="bg-white p-8 rounded-lg shadow-lg relative w-full max-w-3xl mx-auto flex">
          {/* Left Side: Form */}
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <p className="mb-4">Create your account to get started!</p>

            {/* Username Field */}
            <input
              type="text"
              placeholder="Your Username"
              className="border rounded-lg p-2 w-full mb-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            {/* Full Name Field */}
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-lg p-2 w-full mb-4"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            {/* Email Field */}
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-lg p-2 w-full mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password Field */}
            <input
              type="password"
              placeholder="Your Password"
              className="border rounded-lg p-2 w-full mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Gender Field */}
            <select
              className="border rounded-lg p-2 w-full mb-4"
              value={selectedGender}
              onChange={handleGenderChange}
              onClick={() => setIsDisable(true)}
            >
              <option value="" disabled={isDisable}>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            {/* Error Message */}
            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
              <button
                onClick={handleSignUp}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 rounded-lg"
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-1/2 p-4 flex items-center justify-center flex-col ">
            <img
              src={WelCome} // Replace with your signup image URL
              alt="Signup Visual"
              className="rounded-lg shadow-lg"
            />

            <p className="mt-5">
              <span onClick={changeAuthOptions} className="text-orange-600 hover:text-orange-700 hover:font-semibold cursor-pointer">
                Log in
              </span>

              
              , if you have an account.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
