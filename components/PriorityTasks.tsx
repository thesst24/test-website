import { Loader, Calendar, LoaderCircle, ChevronRight } from "lucide-react"
import Help from "./HelpYou"

const dataPriority = [
    {id:1,
        title:"Follow-ups",
        month: "Apr 1",
        status: "3/4 completed",
        des: "AI reminders for client follow-ups and check-ins."
    },
    {id:2,
        title:"Contract Review",
        month: "Apr 1",
        status: "1/2 completed",
        des: "AI review and approval of contracts."
    },
    {id:3,
        title:"Invoices",
        month: "Apr 2",
        status: "1/5 paid",
        des: "Notify customers about payment."
    },
    {id:4,
        title:"View new offers",
        month: "Apr 2",
        status: "3/4 paid",
        des: "A quick response to an ofter increases trust."
    }
]


export default function Priority(){
    return(
        <div>
            <div className="flex justify-between">
                <p className="font-medium text-2xl">Priority tasks</p>
                <p className="text-blue-500">See all</p>
            </div>
            <div>
                <ul className="mt-7">
                    {dataPriority.map((prio) => (
                        <li key={prio.id} className="flex flex-row w-full justify-between hover:bg-gray-200 hover:rounded-2xl px-5 py-3 bg-amber-200"><div className="flex flex-row"><LoaderCircle className="flex flex-row mr-2" />
                        <div> 
                        <div className="flex flex-row gap-4 items-center"><p className="font-medium text-[18px]">{prio.title}</p>
                            <span className="flex flex-row"><Calendar /> {prio.month}</span> 
                            <span className="flex flex-row"><Loader/> {prio.status}</span>  </div>
                        <span>{prio.des}</span>
                        </div>
                        </div>
                        <div className="flex flex-row items-center"><ChevronRight /></div></li>
                    ))}
                </ul>
            </div>
            <Help />
        </div>
    )
}