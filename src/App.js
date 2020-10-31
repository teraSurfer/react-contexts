import React, { useState } from "react";
import { UserProvider } from "./contexts/UserContext";
import UserProfile from "./components/UserProfile";

export default function App() {
  const [user, setUser] = useState({ id: "1", name: "Hello" });

  return (
    <UserProvider value={user}>
      <UserProfile />
    </UserProvider>
  );
}
