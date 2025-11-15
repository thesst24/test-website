import ViewRevenue from "@/components/ViewRevenue";
import Chart from "@/components/Chart";
import ManageProject from "@/components/ManageProject";
import Priority from "@/components/PriorityTasks";


export default function Home() {
  return (
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
