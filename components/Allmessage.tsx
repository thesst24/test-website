import { Search, ChevronDown } from "lucide-react";

export default function AllMessage() {
    return (
        <div>
            <div>
                <h2>All messages</h2>
                <Search />
                <div><p>All Platforms</p><ChevronDown /></div>
            </div>
        </div>
    )
}