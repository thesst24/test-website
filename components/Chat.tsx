import { VolumeX,Star,EllipsisVertical,WandSparkles, Send, Paperclip, Tally1 } from "lucide-react";

export default function ChatBox(){
    return(
        <div>
            <div className="flex justify-between items-center border-2 border-gray-300 rounded-t-2xl p-5">
                <div className="flex items-center justify-center">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/677af80a-4f37-4a8c-8228-1dc57a31cf6f/dfrl8g1-2d672c38-a7fb-45c0-bc3d-aab0c4a88bf8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi82NzdhZjgwYS00ZjM3LTRhOGMtODIyOC0xZGM1N2EzMWNmNmYvZGZybDhnMS0yZDY3MmMzOC1hN2ZiLTQ1YzAtYmMzZC1hYWIwYzRhODhiZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ux4uZdB28eEFl7JmQw9Zp1qvlH6cr9TkaIWO5ocT3sY" 
                alt="Profile"
                width={30} height={30} />
                <div className="flex flex-col ml-3">
                    <h1>Sophie T.</h1>
                    <p>USA | Local Time: </p>
                    </div>        
                </div>
            <div className="flex gap-2">
                <VolumeX />
                <Star />
                <EllipsisVertical />      
            </div>
            </div> 

            <div className="flex flex-col justify-items-end border-2 border-t-0 border-gray-300 rounded-b-2xl p-5">
            <div>

                <div>
                <p>Apr 1 2025, 3:08 PM</p>
                <div className="w-105 h-20 bg-sky-100 px-3 py-5 rounded-b-2xl rounded-tr-2xl">
                    Hi! Your portfolio is impressive. Looking for a designer
                    for a tech startup landing page. Are you avilable?
                </div>
                </div>  

                <div className="flex flex-col items-end">
                <p className="flex ">Apr 1 2025, 3:09 PM</p>
                <div className="w-105 h-20 bg-purple-100 px-3 py-5 rounded-b-2xl rounded-tl-2xl">
                    Hi! Yes, I`m avilable. What do you nedd help with?
                </div>
                </div> 

                <div>
                <p>Apr 1 2025, 3:09 PM</p>
                <div className="w-105 h-20 bg-sky-100 px-3 py-5 rounded-b-2xl rounded-tr-2xl">
                    Hi! Your portfolio is impressive. Looking for a designer
                    for a tech startup landing page. Are you avilable?
                </div>
                </div>  
            </div> 
            <div>
             <div className="mt-6 flex items-center">
                <div className="relative w-full flex items-center">
                    <input type="text" className=" bg-gray-100 focus:outline-gray-200 rounded-4xl w-full pl-12 pr-3 py-4 flex items-center border-none text-xl" 
                     id="ask" placeholder="Send message..." />

                <Paperclip className="absolute left-5 flex items-center" />
                <div className="absolute flex items-center left-300">
                    <Send className="mr-4"/>
                    <Tally1  />
                    <WandSparkles />
                </div>
                </div>

                
            </div>
            <div className="text-center p-5"><p>LLoopAI can make mistakes. Conside checking important informaiton</p></div>
             
            </div>          
            </div>
        </div>
    )
}