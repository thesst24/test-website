import { ChevronDown,Download,Dot } from "lucide-react";

export default function Chart() {
    return (
        <div className="border-2 border-gray-500 rounded-4xl p-5 mx-10 my-3">
            <div className="flex justify-between items-center  font-medium text-2xl">
                <p>Revenue Analytics</p>
                <div className="flex gap-4">
                <div className="flex gap-2">
                    <p>Eamings</p>
                    <ChevronDown />
                </div>
                <div className="flex gap-2">
                    <p>Last 30 Days</p>
                    <ChevronDown />
                </div>
                <Download />
                </div>
            </div>

            <div>
                <div className="flex items-center"><Dot className="stroke-green-600 size-10" />
                    <p className="font-medium text-xl">Actual</p>
                </div>
                <div className="flex items-center"><Dot className="stroke-gray-400 size-10" />
                    <p className="font-medium text-xl">AI Projected</p>
                </div>
                
                <div className="mt-2 mb-13">
                    <div className="flex w-75 h-25 p-2 justify-start text-wrap border-2 rounded-2xl bg-gray-200 border-gray-400">
                        <div className="w-30 h-30 "><img src="https://www.iconpacks.net/icons/2/free-infinity-loop-icon-3229-thumb.png" alt="Loop"
                    width={30} height={30} /></div>
                        <p>Better client communication can boost tips and repeat work.
                        try faster responses and follow-ups!</p>
                    </div>
                </div>

                <button className="px-20 py-3 text-white rounded-3xl bg-linear-to-t from-cyan-500 to-sky-700">Run Analysis</button>
            </div>

        </div>
    )
}