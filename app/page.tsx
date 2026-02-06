import LoginForm from "./components/login-form";
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen flex ">
      <div className=" flex h-auto bg-white w-1/2 justify-center items-center">
      <Image 
             src="/Logo.png" 
             alt=""
             width={500}
             height={500}  
             className="w-100 h-100"/>
      </div>

      <div className="flex h-auto bg-gray-100 w-1/2 items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
