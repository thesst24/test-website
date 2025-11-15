import { Search, ChevronDown, Star } from "lucide-react";

const dataMessage = [
    {id: 1,
        imageUrl: "https://cdn.pfps.gg/pfps/4040-olivia-rodrigo-profile-icon.png",
        name:"Sopie T.",
        chat: "Great Before we dive into details, can you tell me about..",
        hours: "8 hours",
        noti: true
    },
    {id: 2,
        imageUrl: "https://dl6pgk4f88hky.cloudfront.net/2024/10/17/liamweb.jpg",
        name:"Liam K.",
        chat: "I'm thrilled to dive into our possibilities",
        hours: "1 days",
        noti: true
    },
    {id: 3,
        imageUrl: "https://imageio.forbes.com/specials-images/imageserve/618ad581436c3d3f5274b2cb/0x0.jpg?format=jpg&crop=1941,1940,x737,y363,safe&height=416&width=416&fit=bounds",
        name:"Olivia R.",
        chat: "Hope you're doing well! Just checking in to see how t..",
        hours: "2 days",
        noti: true
    },
    {id: 4,
        imageUrl: "https://mediaslide-us.storage.googleapis.com/imgmodels/pictures/8179/108549/large-1716171328-c8fa27396790c5496d621995c72b987a.jpg",
        name:"Noah J.",
        chat: "I'm excited about what we can achieve.",
        hours: "8 days",
        noti: true
    },
    {id: 5,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStkBUrlsIpt1fumQ-vEBm2sdwgfIqkJjItxQ&s",
        name:"Sam W.",
        chat: "Let me know if you have time to go over them together.",
        hours: "4 days",
        noti: true
    },
    {id: 6,
        imageUrl: "https://c.superprof.com/i/a/37235186/16051298/600/20250703093258/name-ava-piazza-pro-footballer-with-experience-competing-australia-portugal-and-most-recently-women-champions.jpg",
        name:"Ava M.",
        chat: "The latest version looks grea! I have a few minor tweaks",
        hours: "4 days",
        noti: true
    },
    {id: 7,
        imageUrl: "https://cdn.pfps.gg/pfps/4040-olivia-rodrigo-profile-icon.png",
        name:"Sopie T.",
        chat: "Great Before we dive into details, can you tell me about..",
        hours: "5 days",
        noti: true
    },
    {id: 8,
        imageUrl: "https://cdn.pfps.gg/pfps/4040-olivia-rodrigo-profile-icon.png",
        name:"Sopie T.",
        chat: "Great Before we dive into details, can you tell me about..",
        hours: "8 days",
        noti: true
    },
    {id: 9,
        imageUrl: "https://cdn.pfps.gg/pfps/4040-olivia-rodrigo-profile-icon.png",
        name:"Sopie T.",
        chat: "Great Before we dive into details, can you tell me about..",
        hours: "11 days",
        noti: true
    },
    {id: 10,
        imageUrl: "https://cdn.pfps.gg/pfps/4040-olivia-rodrigo-profile-icon.png",
        name:"Sopie T.",
        chat: "Great Before we dive into details, can you tell me about..",
        hours: "10 days",
        noti: true
    }
]

export default function AllMessage() {
    return (
        <div  className="border-2 border-gray-300 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-15 font-medium">All messages</h2>
                <div className="flex ">
                    <Search />
                    <p className="text-blue-600 ml-10">All Platforms</p><ChevronDown />
                </div>
            </div>

            <div>
                <ul>
                    {dataMessage.map((mes) => (
                        <li key={mes.id} className="flex justify-between h-15 hover:bg-gray-200 hover:rounded-2xl">
                        <div className="flex items-center gap-2">
                            <div>
                            <img src={mes.imageUrl} width={45} height={45}
                            className="rounded-full" alt="ava" /> 
                            </div>
                            <div>
                            <p className="font-medium">{mes.name}</p>
                            <p className="text-gray-500">{mes.chat}</p></div>
                        </div>

                        <div>
                            <div></div>
                        </div>

                        <div className="flex flex-col items-end">
                            <p>{mes.hours}</p>
                            <Star />
                        </div>
                        
                            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}