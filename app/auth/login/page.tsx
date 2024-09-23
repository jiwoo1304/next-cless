"use client";
import { useContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import instagramLogo from "../../public/instagramLogo.svg";
import Image from "next/image";
import { RiFacebookBoxFill } from "react-icons/ri";
import Link from "next/link";
import { UserContext } from "@/utils/userContext";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("john2@example.com");
  const [password, setPassword] = useState("password123");
  const [message, setMessage] = useState("");
  const [IsPasswordMarking, setIsPasswordMarking] = useState(true);

  const userData = useContext(UserContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.0.2:8000/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      userData?.fetchUser();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white h-screen pt-[130px] text-gray-800">
      <div className="wrap w-[350px] mx-auto">
        <div className="border">
          <div className="text-[4rem] text-center my-[48px] font-sans">
            Log in
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-[270px] mx-auto flex flex-col gap-[6px]"
            action=""
          >
            <input
              className="w-full border h-[38px] bg-[#fafafa] rounded-sm px-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              className="w-full border h-[38px] bg-[#fafafa] rounded-sm px-2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <div
              className="absolute right-3 left-3"
              style={{ cursor: "pointer" }}
              onClick={() => setIsPasswordMarking(!IsPasswordMarking)}
            >
              {!IsPasswordMarking ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </div>
            <button
              type="submit"
              className="bg-[#6bb5f9] p-2 rounded-lg my-2 text-white font-bold text-center text-sm"
            >
              Log in
            </button>
          </form>
          <div className="w-[270px] mx-auto flex items-center my-2">
            <div className="h-[0px] border-b w-full" />
            <div className="mx-4 opacity-50 font-bold text-sm">OR</div>
            <div className="h-[0px] border-b w-full" />
          </div>
          <div className="mx-auto text-center flex flex-col gap-6 my-6 text-sm text-[#385185]">
            <Link href="/auth/login/register" className="font-bold">
              Sign up
            </Link>
            <div className="text-xs font-medium">Forgot password?</div>
          </div>
        </div>
      </div>
    </div>
  );
}
