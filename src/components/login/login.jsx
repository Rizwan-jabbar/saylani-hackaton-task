import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/slices/userSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [localError, setLocalError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, success } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch({ type: "users/resetStatus" });
  }, [dispatch]);

  // Navigate only after success
  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      setLocalError("Email and password are required");
      return;
    }

    setLoading(true);
    setLocalError("");

    // Dispatch login
    
    setTimeout(() => {
      setLoading(false)
      dispatch(loginUser({ user: formData }));

    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {localError && <p className="text-red-500 text-center mb-4">{localError}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            disabled={loading}
          >
            {loading && <ClipLoader color="#ffffff" size={20} />}
            <span>{loading ? "Logging in..." : "Login"}</span>
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-green-600 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
