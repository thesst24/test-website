export default function ViewRevenue(){
    return(
         <div>
            <div className="flex w-full">
            <div className="flex flex-col justify-between items-center w-80 h-50 border-2 border-gray-200 p-5 rounded-2xl m-2 bg-amber-200">
                <div className="flex justify-between w-full">
                    <p className="font-medium text-3xl">Clients</p>
                    <span className="border-green-400 text-green-700 border-2 px-3 py-1 rounded-2xl bg-green-200">+4</span></div>
                <div className="flex justify-between w-full text-center items-center">
                    <h5 className="font-bold text-5xl">14</h5>
                <p className="text-gray-500">Compare 10 (last month)</p></div> 
            </div>

            <div className="flex flex-col justify-between items-center w-80 h-50 border-2 border-gray-200 p-5 rounded-2xl m-2 bg-amber-200">
                <div className="flex justify-between w-full">
                    <p className="font-medium text-3xl">Revenue</p>
                    <span className="border-green-400 text-green-700 border-2 px-3 py-1 rounded-2xl bg-green-200">-8%</span></div>
                <div className="flex justify-between w-full text-center items-center">
                    <h5 className="font-bold text-5xl">$3 552.00</h5>
                <p className="text-gray-500">$3 7200.00 (last month)</p></div> 
            </div>

            <div className="flex flex-col justify-between items-center w-80 h-50 border-2 border-gray-200 p-5 rounded-2xl m-2 bg-amber-200">
                <div className="flex justify-between w-full">
                    <p className="font-medium text-3xl">Projects</p>
                    <span className="border-green-400 text-green-700 border-2 px-3 py-1 rounded-2xl bg-green-200">+6</span></div>
                <div className="flex justify-between w-full text-center items-center">
                    <h5 className="font-bold text-5xl">22</h5>
                <p className="text-gray-500">Compare 16 (last month)</p></div> 
            </div>
            
            </div>
            
        </div>
    )
}