import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("portfolio-auth-user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("portfolio-auth-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("portfolio-auth-user");
    }
  }, [user]);

  const signInWithEmail = async (email, password) => {
    if (!email || !password) {
      throw new Error("Please provide both email and password.");
    }

    setUser({
      name: email.split("@")[0],
      email,
      provider: "Email / Password",
    });
  };

  const signInWithProvider = async (provider) => {
    setUser({
      name: `${provider} User`,
      email: `user@${provider.toLowerCase()}.mock`,
      provider,
    });
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signInWithEmail, signInWithProvider, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
