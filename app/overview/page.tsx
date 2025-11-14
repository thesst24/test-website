import ViewRevenue from "@/components/ViewRevenue";
import Chart from "@/components/Chart";
import Priority from "@/components/PriorityTasks";

export default function Overview() {
    return(
      <div className="flex w-full">
         <div className="size-[65%] bg-red-300">
        <ViewRevenue />
        <Chart />
       </div>
       <div className="size-[35%] bg-blue-400">
        <Priority/>
       </div>
      </div>
    );
}