import { Card } from "..";

import { stats } from "../../utils";
import cn from "../../utils/className";

const HomeStats = () => {
  return (
    <div className="flex items-center gap-x-10">
      {stats.map((item, i) => (
        <Card styles="w-full px-3 py-5 flex gap-x-4" key={i}>
          <div className={cn(item.color, "flex items-center px-2")}>
            <item.icon size={30} className={cn(item.fillColor, "p-1")} />
          </div>
          <div className="space-y-1">
            <h2 className="text-md ">{item.header}</h2>
            <p className="text-[10px] text-gray-400">{item.subHeader}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default HomeStats;
