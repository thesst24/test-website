
const dataChat = [
    {id:1,
        imageUrl: "https://cdn-icons-png.flaticon.com/512/11328/11328577.png",
        title:"Text Assistance"
    },
     {id:2,
        imageUrl: "https://cdn-icons-png.flaticon.com/512/191/191582.png",
        title:"Process Automation"
    },
     {id:3,
        imageUrl: "https://cdn-icons-png.flaticon.com/512/8625/8625910.png",
        title:"Schedule Optimization"
    },
     {id:4,
        imageUrl: "https://cdn-icons-png.flaticon.com/512/3814/3814507.png",
        title:"Smart Response"
    }
]

export default function Help() {
    return (
        <div className="bg-gray-300 py-5 px-10">
            <div className="text-center">
                <p>Hi, Adam</p>
                <h2 className="font-medium text-3xl">How can I help you?</h2>
            </div>
           
            <div className="flex flex-row items-center justify-evenly">
                <button className="hover:text-indigo-700 hover:bg-white py-2 px-7 rounded-3xl cursor-pointer">LoopAI</button>
                <button className="hover:text-indigo-700 hover:bg-white py-2 px-7 rounded-3xl cursor-pointer">GPT Chat</button>
                <button className="hover:text-indigo-700 hover:bg-white py-2 px-7 rounded-3xl cursor-pointer">Deep Seek</button>
            </div>

            <div className="flex flex-wrap mt-5">
                <div className="bg-white rounded-2xl p-5 w-[50%] flex flex-col gap-5">
                    <img src="https://cdn-icons-png.flaticon.com/512/11328/11328577.png" width={20} height={20} alt="Assistance" />
                    <p>Text Assistance</p>
                </div>
                <div className="bg-white rounded-2xl p-5 w-[50%] flex flex-col gap-5">
                    <img src="https://cdn-icons-png.flaticon.com/512/11328/11328577.png" width={20} height={20} alt="Assistance" />
                    <p>Text Assistance</p>
                </div>
                <div className="bg-white rounded-2xl p-5 w-[50%] flex flex-col gap-5">
                    <img src="https://cdn-icons-png.flaticon.com/512/11328/11328577.png" width={20} height={20} alt="Assistance" />
                    <p>Text Assistance</p>
                </div>
                <div className="bg-white rounded-2xl p-5 w-[50%] flex flex-col gap-5">
                    <img src="https://cdn-icons-png.flaticon.com/512/11328/11328577.png" width={20} height={20} alt="Assistance" />
                    <p>Text Assistance</p>
                </div>
            </div>
        </div>
    )
}