import Image from "next/image";
import SearchInput from "@/app/components/ui/search-input";
import DataGridDemo from "@/app/components/ui/workorder-datagrid";
import Link from "next/link";
import { PlusIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
export default function WorkOrder() {
  return (
    <div className=" min-h-screen">
      <div className="flex h-50 w-auto bg-white">
        <div className="flex h-auto w-100  justify-center items-center p-10 ">
          <Image
            src="/Logo.png"
            alt=""
            width={50}
            height={50}
            className="w-50 h-50"
          />
        </div>

        <div className="flex h-auto w-full  items-center justify-center gap-8">
          <SearchInput placeholder="Work Order..." />
          <SearchInput placeholder="Placa..." />
        </div>

        <div className="flex gap-12 h-auto w-100  items-center justify-center">
          <Link href="" className="border-1 border-gray-400 rounded-md p-1">
            <PlusIcon className="size-6 text-gray-800" />
          </Link>
          <Link href="" className="border-1 border-gray-400 rounded-md p-1">
            <PencilIcon className="size-6 text-gray-800" />
          </Link>
          <Link href="" className="border-1 border-gray-400 rounded-md p-1">
            <TrashIcon className="size-6 text-gray-800" />
          </Link>
        </div>
      </div>
      <div className="flex-1 min-h-[calc(100vh-12rem)] w-auto bg-white">
        <DataGridDemo />
      </div>
    </div>
  );
}
