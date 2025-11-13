export default function Header() {
    return (
        <div className="flex justify-between bg-amber-300">
            <div>
                <img src="https://png.pngtree.com/png-vector/20250111/ourmid/pngtree-neon-infinity-symbol-3d-illustration-png-image_15148888.png" 
                alt="Logo" 
                width={80}
                height={80}/>
            </div>
            <div className="flex items-center">
                <img src="https://maxst.icons8.com/vue-static/icon/popular-request/request-social-media.png" 
                alt="Group Items" 
                width={100}
                height={100}/>
                <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                width={30} height={30} alt="add" />
            </div>
            <div className="flex mt-4">
                <a className="mr-2 ml-2" href="/">Overview</a>
                <a className="mr-2 ml-2" href="#">Clients</a>
                <a className="mr-2 ml-2" href="/overview">Inbox</a>
                <a className="mr-2 ml-2" href="#">Analytics</a>
            </div>
            <div className="flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png"
                width={20} height={20} alt="setting" />
                <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-notification-icon-png-image_4187244.jpg"
                width={20} height={20} alt="notification" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png"
                width={20} height={20} alt="Profile" />
            </div>
        </div>
    )
}