"use client";
import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

type UserType =
  | {
      id: number;
      name: string;
      email: string;
      photoUrl: string;
    }
  | undefined;

interface Props {}

type UserContextType = {
  user: UserType;
  fetchUser: () => Promise<void>;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType>();

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://192.168.0.2:8000/protected", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
      if (!response.data.id) {
        localStorage.removeItem("token");
        // window.location.reload();
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      localStorage.removeItem("token");
      //   window.location.reload();
      // 에러 처리 (401 에러는 인터셉터에서 처리됨)
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};
