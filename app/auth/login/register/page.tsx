"use client";
import { AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import dummy from "../../public/userimg.png";
import user from "../../public/user.svg";
import Image from "next/image";
import { AiOutlineEyeInvisible } from "react-icons/ai";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [message, setMessage] = useState("");
  const [IsPasswordMarking, setIsPasswordMarking] = useState(true);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.0.2:8000/register", {
        name,
        email,
        password,
        photoUrl,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white h-screen pt-[130px] text-gray-800">
      <div className="wrap w-[350px] mx-auto">
        <div className="border">
          <div className="text-[4rem] text-center my-[48px] font-sans">
            Register
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-[270px] mx-auto flex flex-col gap-[6px]"
            action=""
          >
            <input
              className="w-full border h-[38px] bg-[#fafafa] rounded-sm px-2"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              className="w-full border h-[38px] bg-[#fafafa] rounded-sm px-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="w-full border h-[38px] bg-[#fafafa] rounded-sm px-2"
                type={`${IsPasswordMarking ? "password" : "text"}`}
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
            </div>
            <div className="flex flex-col justify-center items-center relative">
              <Image
                src={photoUrl ? "" : ""}
                className="rounded-full  my-8  border"
                style={{
                  width: "120px",
                  height: "120px",
                  backgroundSize: "cover",
                }}
                alt=""
              />
              <div
                className="absolute rounded-full border top-[32px]"
                style={{
                  width: "120px",
                  height: "120px",
                  backgroundImage: `url(${photoUrl})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />

              <input
                className="w-full border h-[38px] bg-[#fafafa] rounded-sm px-2"
                type="text"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                placeholder="photo"
              />
            </div>

            <button
              type="submit"
              className="bg-[#6bb5f9] p-2 rounded-lg my-2 text-white font-bold text-center text-sm"
            >
              Register
            </button>
          </form>
          <div className="w-[270px] mx-auto flex items-center my-2">
            <div className="h-[0px] border-b w-full" />
            <div className="mx-4 opacity-50 font-bold text-sm">OR</div>
            <div className="h-[0px] border-b w-full" />
          </div>
          <div className="mx-auto text-center flex flex-col gap-6 my-6 text-sm text-[#385185]">
            <Link href="/login" className="font-bold">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
