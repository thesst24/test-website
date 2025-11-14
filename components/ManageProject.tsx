import { EllipsisVertical, Search } from "lucide-react";

const dataProject = [
    {id: 1,
    avatar: "https://a-static.besthdwallpaper.com/pretty-simple-actress-sophie-turner-wallpaper-2400x1350-52179_50.jpg",
    name: "Sophie T.",
    clientName: "@sophie.turner",
    tasktitle: "Garden Grove Designs",
    tasksub: "Mobile Application Design",
    note: true,
    duoon: "Apr 2",
    price: "$25",
    status: "Draft"
    },
    {
        id: 2,
    avatar: "https://www.whatsnextsam.com/wp-content/uploads/2024/09/cropped-Whats_Next_Sam_Profile_Blue.png",
    name: "Sam S.",
    clientName: "@sam.smith",
    tasktitle: "Flora & Fauna Studio",
    tasksub: "Online Shopping Platform",
    note: false,
    duoon: "Apr 1",
    price: "$50",
    status: "In Progress"
    },
    {
        id: 3,
    avatar: "https://cdn.pfps.gg/pfps/4040-olivia-rodrigo-profile-icon.png",
    name: "Olivia P.",
    clientName: "@olivia.peterson",
    tasktitle: "Vibrant Vases Studio",
    tasksub: "Digital Commerce Platform",
    note: true,
    duoon: "Apr 1",
    price: "$225",
    status: "On review"
    }
];

const statusStyles: Record<string, string> ={
    Draft: "bg-gray-100 text-gray-600 border border-gray-200",
    "In Progress":"bg-yellow-100 text-yellow-800 border border-yellow-200",
    "On review" : "bg-blue-100 text-blue-700 border border-blue-200",
};

export default function ManageProject() {
    return(
        <div className="border-2 border-gray-500 rounded-4xl p-5 mx-10 my-3">
            <div className="flex justify-between"><h2 className="font-medium text-2xl mb-5">Manage Projects</h2>
            <Search className="mr-10"/></div>  
            <nav className="flex gap-4 w-full">
                <button className="font-medium text-xl px-3 py-2 rounded-2xl border-2 border-green-600">Priority
                    <span className="bg-indigo-600 ml-2 rounded-full px-2 text-white">3</span></button>

                 <button className="font-medium text-xl px-3 py-2 hover:rounded-2xl hover:border-2 hover: border-green-600">Active
                    <span className="bg-gray-500 hover:bg-indigo-600 ml-2 rounded-full px-2 text-white">4</span></button>

                 <button className="font-medium text-xl px-3 py-2 hover:rounded-2xl hover:border-2 hover: border-green-600">Completed
                    </button>

                    <button className="font-medium text-xl px-3 py-2 hover:rounded-2xl hover:border-2 hover: border-green-600">Canceled
                    </button>

                    <button className="font-medium text-xl px-3 py-2 hover:rounded-2xl hover:border-2 hover: border-green-600">Recommended
                    <span className="bg-gray-500 hover:bg-indigo-600 ml-2 rounded-full px-2 text-white">3</span></button>
            </nav>

            <div>
                <table className="w-full">
                    <thead>
                    <tr className="text-gray-500 text-xs">
                        <th className="py-3 text-left">Client</th>
                        <th className="py-3 text-left">Task</th>
                        <th className="py-3 text-left">Note</th>
                        <th className="py-3 text-left">Duo on</th>
                        <th className="py-3 text-left">Price</th>
                        <th className="py-3 text-left">Status</th>
                        <th className="py-3 text-left">More</th>
                    </tr>
                    </thead>

                    <tbody>
                        {dataProject.map((user) => (
                            <tr key={user.id} className="my-20">
                                {/* Client */}
                                <td>
                                    <div className="flex items-center gap-3">
                                        <img src={user.avatar} alt={user.name}
                                        className="rounded-full w-14 h-14 object-cover" />
                                        <div className="">
                                            <h3 className="font-medium text-[18px]">{user.name}</h3>
                                            <p>{user.clientName}</p>
                                        </div>
                                    </div>
                                </td>
                                {/* Task */}
                                <td>
                                    <p className="font-medium text-[18px]">{user.tasktitle}</p>
                                    <p>{user.tasksub}</p>
                                </td>
                                {/* Note */}
                                <td>
                                    <p>{user.note}</p>
                                </td>

                                {/* Duo on */}
                                <td>
                                    <p>{user.duoon}</p>
                                </td>
                                {/* Price */}
                                <td>
                                    <p className="font-medium text-[18px]">{user.price}</p>
                                </td>

                                {/* Status */}
                                <td>
                                    <span 
                                    className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap1 ${statusStyles[user.status]}`}>
                                        {user.status}</span>
                                </td>
                                {/* More */}
                                <td>
                                    <EllipsisVertical />
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}