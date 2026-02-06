import Image from "next/image";
export default function WorkOrder(){
    return(
        <div className=" min-h-screen">
            <div className="flex h-50 w-auto bg-white">
                <div className="flex h-auto w-100 bg-gray-200 justify-center items-center p-10 ">
                    <Image 
                                 src="/Logo.png" 
                                 alt=""
                                 width={50}
                                 height={50}  
                                 className="w-50 h-50"/>
                </div>
                <div className="h-auto w-full bg-gray-300"></div>
                <div className="h-auto w-100 bg-gray-400"></div>
            </div>
            <div className="flex-1 min-h-[calc(100vh-12rem)] w-auto bg-blue-500"></div>
        </div>
    );
}