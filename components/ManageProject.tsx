export default function ManageProject() {
    return(
        <div>
            <h2 className="font-medium text-2xl">Manage Projects</h2>
            <nav className="flex gap-2">
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
        </div>
    )
}