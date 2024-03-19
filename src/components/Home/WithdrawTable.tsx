import { withdrawData } from "../../utils";

const WithdrawTable = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full ">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="text-[10px] font-medium text-gray-400 px-2 py-1 text-left">
                    DATE
                  </th>
                  <th className="text-[10px] font-medium text-gray-400 px-2 py-1 text-left">
                    METHOD
                  </th>
                  <th className="text-[10px] font-medium text-gray-400 px-2 py-1 text-left">
                    AMOUNT
                  </th>
                  <th className="text-[10px] font-medium text-gray-400 px-2 py-1 text-left">
                    STATUS
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {withdrawData.map((item, i) => (
                  <tr className="group hover:shadow hover:border" key={i}>
                    <td className="px-2 py-3 whitespace-nowrap text-[10px] font-medium text-gray-700">
                      {item.date}
                    </td>
                    <td className="text-[10px] text-gray-700 font-light px-2 py-3 whitespace-nowrap">
                      {item.cardType}
                    </td>
                    <td className="text-[10px] text-gray-700 font-light px-2 py-3 whitespace-nowrap">
                      {item.cardName}
                    </td>
                    <td
                      className={`text-[10px] ${
                        item.status === "Pending"
                          ? "text-amber-500"
                          : item.status === "Completed"
                          ? "text-green-500"
                          : "text-red-500"
                      }  font-light px-2 py-3 whitespace-nowrap`}
                    >
                      {item.status}
                    </td>
                    <td className="px-2 text-gray-300 group-hover:text-black">
                      ...
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawTable;
