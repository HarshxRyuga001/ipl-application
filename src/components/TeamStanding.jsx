import { useState, useEffect } from "react";
import { getPointsTable } from "../services/api";
import Loader from "./ui/Loader";
export default function TeamStanding() {
  const [pointsTable, setPointsTable] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPointsTable = async () => {
      try {
        const data = await getPointsTable();
        setPointsTable(data);
      } catch (err) {
        setError("We are not able to load the data");
      } finally {
        setLoading(false);
      }
    };
    fetchPointsTable();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader size="lg" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl text-bold mb-6">Points Table</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="">
            <tr className="bg-gray-200">
              <th className="px-4 py-3 text-center text-sm text-semibold text-gray-600">
                Team
              </th>
              <th className="px-4 py-3 text-center text-sm text-semibold text-gray-600">
                P
              </th>
              <th className="px-4 py-3 text-center text-sm text-semibold text-gray-600">
                W
              </th>
              <th className="px-4 py-3 text-center text-sm text-semibold text-gray-600">
                L
              </th>
              <th className="px-4 py-3 text-center text-sm text-semibold text-gray-600">
                Points
              </th>
              <th className="px-4 py-3 text-center text-sm text-semibold text-gray-600">
                NRR
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {pointsTable.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-50 transition-color`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src={iteam.flag}
                      alt={item.team}
                      className="w-8 h-8 rounded-full object-contains"
                    />
                  </div>
                </td>

                <td className="bpx-4 py-3 text-center text-gray-600">
                  {item.played}
                </td>
                <td className="bpx-4 py-3 text-center text-gray-600">
                  {item.won}
                </td>
                <td className="bpx-4 py-3 text-center text-gray-600">
                  {item.loss}
                </td>
                <td className="bpx-4 py-3 text-center text-gray-600">
                  {item.points}
                </td>
                <td className="bpx-4 py-3 text-center text-gray-600">
                  {item.nrr}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
