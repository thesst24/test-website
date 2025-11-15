import { Infinity,Bell, Settings } from "lucide-react"

export default function Header() {
    return (
        <div>
        <div className="flex justify-between bg-white py-4">
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white mr-3"><Infinity /></div>
                <p>LoopAI</p>
             <div className="flex items-center ml-10">
                <img src="https://maxst.icons8.com/vue-static/icon/popular-request/request-social-media.png" 
                alt="Group Items" 
                width={120}
                height={120}/>
                <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                width={30} height={30} alt="add" />
                </div>
            </div>

            <div className="flex mt-4 gap-1 mr-20">
                <a className=" border-3 border-gray-200 py-2 px-5 hover:boder-3 hover:border-gray-400 font-medium text-xl rounded-3xl" href="/overview">Overview</a>
                <a className=" border-3 border-gray-200 py-2 px-5 hover:boder-3 hover:border-gray-400 font-medium text-xl rounded-3xl" href="#">Clients</a>
                <a className=" border-3 border-gray-200 py-2 px-5 hover:boder-3 hover:border-gray-400 font-medium text-xl rounded-3xl" href="/inbox">Inbox</a>
                <a className=" border-3 border-gray-200 py-2 px-5 hover:boder-3 hover:border-gray-400 font-medium text-xl rounded-3xl" href="#">Analytics</a>
            </div>


            <div className="flex items-center gap-2">
                <div className="p-3 rounded-full border-2 border-gray-200"><Settings /></div>
                <div className="p-3 relative rounded-full border-2 border-gray-200"><Bell />
                    <div className="bg-red-600 top-2 right-4 absolute rounded-full w-2 h-2"></div></div>
                <div><img src="https://cdn.pfps.gg/pfps/4040-olivia-rodrigo-profile-icon.png"
                className="rounded-full relative" 
                width={50} height={50} alt="Profile" />
                <span className="bg-green-600 top-21 right-7 absolute rounded-full w-2 h-2"></span></div>
            </div>
        </div>      
        </div>
    )
}