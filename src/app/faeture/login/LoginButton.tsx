"use client";

import { AuthContext } from "@/shared/context/AuthContext";
import { Button } from "@/shared/ui/button";
import { useContext, useEffect } from "react";

export default function LoginButton() {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  const login = () => {
    if (loggedIn === false) {
      setLoggedIn();
    }
  };

  useEffect(() => {}, [loggedIn]);

  return (
    <div>
      <Button onClick={login}>로그인</Button>
    </div>
  );
}
