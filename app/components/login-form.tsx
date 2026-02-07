import LoginInput from "./ui/login-input";
import Link from "next/link";
export default function LoginForm() {
  return (
    <div className="grid justify-items-center ">
      <div className="w-full max-w-80 text-left">
        <h1 className="text-5xl font-bold tracking-tighter text-black">
          Iniciar Sesion
        </h1>
        <p className="text-lg text-gray-600 mt-2 mb-5">
          Precisión mecánica,
          <br />
          confianza en cada vuelta
        </p>
      </div>
      <LoginInput type="email" placeholder="User" />
      <LoginInput type="password" placeholder="Password" />
      <Link href="/Home/work-order" className="mt-10">
        <button
          type="submit"
          className="h-10 w-30 bg-white rounded-md text-black hover:bg-gray-200 cursor-pointer"
        >
          Submit
        </button>
      </Link>
    </div>
  );
}
