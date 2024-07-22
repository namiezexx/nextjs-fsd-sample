"use client";

import { AuthContext } from "@/shared/context/AuthContext";
import { Button } from "@/shared/ui/button";
import { useContext, useEffect } from "react";

export default function LoginButton() {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  const login = () => {
    setLoggedIn();
  };

  useEffect(() => {}, [loggedIn]);

  return (
    <div>
      <Button variant="outline" onClick={login}>
        {loggedIn === false ? "로그인" : "로그아웃"}
      </Button>
    </div>
  );
}
