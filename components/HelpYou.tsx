import { WandSparkles } from "lucide-react"

export default function Help() {
    return (
        <div className="bg-gray-300 py-5 px-10 rounded-2xl border-2 border-gray-300">
            <div className="text-center">
                <p>Hi, Adam👋</p>
                <h2 className="font-medium text-3xl">How can I help you?</h2>
            </div>
           
            <div className="flex flex-row items-center justify-center gap-3 mt-6">
                <button className="hover:text-indigo-700 hover:bg-white py-2 px-7 rounded-3xl cursor-pointer flex items-center gap-2 justify-center"> 
                    <img src="https://www.iconpacks.net/icons/2/free-infinity-loop-icon-3229-thumb.png" width={30} height={30} alt="loop" />LoopAI</button>
                <button className="hover:text-indigo-700 hover:bg-white py-2 px-7 rounded-3xl cursor-pointer flex items-center gap-2 justify-center"> 
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png" width={35} height={35} alt="chatgpt" />GPT Chat</button>
                <button className="hover:text-indigo-700 hover:bg-white py-2 px-7 rounded-3xl cursor-pointer flex items-center gap-2 justify-center"> 
                    <img src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/deepseek.png" className="stroke-black" width={25} height={25} alt="deepseek" />Deep Seek</button>
            </div>

            <div className="grid grid-cols-2 grid-cols-[2fr 2fr] gap-2 mt-5">
                <div className="bg-white rounded-2xl p-5 flex flex-col gap-5">
                    <img src="https://cdn-icons-png.flaticon.com/512/11328/11328577.png" width={20} height={20} alt="Assistance" />
                    <p>Text Assistance</p>
                </div>
                <div className="bg-white rounded-2xl p-5  flex flex-col gap-5">
                    <img src="https://cdn-icons-png.flaticon.com/512/191/191582.png" width={20} height={20} alt="Assistance" />
                    <p>Process Automation</p>
                </div>
                <div className="bg-white rounded-2xl p-5  flex flex-col gap-5">
                    <img src="https://cdn-icons-png.flaticon.com/512/8625/8625910.png" width={20} height={20} alt="Assistance" />
                    <p>Schedule Optimization</p>
                </div>
                <div className="bg-white rounded-2xl p-5  flex flex-col gap-5">
                    <img src="https://cdn-icons-png.flaticon.com/512/3814/3814507.png" width={20} height={20} alt="Assistance" />
                    <p>Smart Response</p>
                </div>
            </div>

            <div className="mt-6 flex items-center">
                <input type="text" 
                className="relative bg-gray-100 focus:outline-gray-200 rounded-3xl w-full py-3 px-5 flex items-center border-none text-2xl" 
                id="ask" placeholder="Ask something..." />
                <WandSparkles className="absolute right-13"/>
            </div>
        </div>
    )
}