import { menus } from "../../utils";
import { LuLogOut } from "react-icons/lu";
// Assuming you have a LogoutIcon component

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 fixed flex flex-col h-screen text-white">
      <div className="px-3 py-2 flex-1">
        <div className="flex items-center pl-3 mb-5">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>

        <div className="space-y-1.5">
          {menus.map((route, i) => (
            <div key={i}>
              {route.name === "message" ? (
                <div className="flex items-center justify-between hover:bg-amber-500 ">
                  <h4 className="text-sm group flex p-3 w-full justify-start items-center font-medium cursor-pointer hover:text-white rounded-lg transition">
                    <route.icon className="h-5 w-5 mr-3" />
                    {route.name}
                  </h4>
                  <div className="rounded-full p bg-amber-500 h-7 w-7 flex items-center justify-center p-1">
                    <h5 className="text-[10px]">5</h5>
                  </div>
                </div>
              ) : (
                <h4 className="text-sm group flex p-3 w-full justify-start items-center font-medium cursor-pointer hover:text-white hover:bg-amber-500 rounded-lg transition">
                  <route.icon className="h-5 w-5 mr-3" />
                  {route.name}
                </h4>
              )}
            </div>
          ))}
        </div>
      </div>

      <h4 className="text-sm group text-yellow-500 flex p-3 w-full justify-start items-center font-medium cursor-pointer  rounded-lg transition">
        <LuLogOut className="h-5 w-5 mr-3" />
        Sign Out
      </h4>
    </div>
  );
};

export default Sidebar;
