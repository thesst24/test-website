import AllMessage from "@/components/Allmessage";
import ChatBox from "@/components/Chat";

export default function AboutOver(){
    return(
        <div className="flex gap-3 justify-between w-full">
            <div className="size-[65%]"><ChatBox /></div>
            <div className="size-[35%] "><AllMessage /></div>
        </div>
    )
}