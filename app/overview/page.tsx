import { VolumeX,Star,EllipsisVertical } from "lucide-react"
import Header from "../../components/header"


export default function AboutOver(){
    return(
        <div>
            <Header />
            <div className="flex items-center justify-centerS">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/677af80a-4f37-4a8c-8228-1dc57a31cf6f/dfrl8g1-2d672c38-a7fb-45c0-bc3d-aab0c4a88bf8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi82NzdhZjgwYS00ZjM3LTRhOGMtODIyOC0xZGM1N2EzMWNmNmYvZGZybDhnMS0yZDY3MmMzOC1hN2ZiLTQ1YzAtYmMzZC1hYWIwYzRhODhiZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ux4uZdB28eEFl7JmQw9Zp1qvlH6cr9TkaIWO5ocT3sY" 
            alt="Profile"
            width={30} height={30} />
            <div className="flex flex-col ml-3">
                <h1>Sophie T.</h1>
            <p>USA | Local Time: </p>
            </div>        
            </div>
            <div>
            <VolumeX />
            <Star />
            <EllipsisVertical />      
            </div>
        </div>
    )
}