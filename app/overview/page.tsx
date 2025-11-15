import ViewRevenue from "@/components/ViewRevenue";
import Chart from "@/components/Chart";
import Priority from "@/components/PriorityTasks";
import ManageProject from "@/components/ManageProject";

export default function Overview() {
    return(
      <div className="flex w-full gap-3 justify-center">
         <div className="size-[65%] bg-white">
        <ViewRevenue />
        <Chart />
        <ManageProject />
       </div>
       <div className="size-[35%] bg-white">
        <Priority/>
       </div>
      </div>
    );
}