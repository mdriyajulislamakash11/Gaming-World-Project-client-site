import React from "react";
import { useLoaderData } from "react-router-dom";

const GameWatchList = () => {
  const loadedDatas = useLoaderData();
  //   console.log(loadedDatas[0].email.email)

  return (
    <div className="w-11/12 mx-auto my-16 ">
      <h2 className="text-3xl font-bold text-center my-10">My Reviews</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="bg-blue-500 text-white text-center">
              <th>Serial</th>
              <th>Game Title</th>
              <th>Review DesCription</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {loadedDatas.map((data, index) => (
              <tr key={data._id} className="text-center">
                <th className="">{index + 1}</th>
                <td className="w-5/12">{data.title}</td>
                <td className="w-3/12">{data.description.slice(0, 30)}</td>
                <td className="w-2/12 text-center">{data.rating}</td>
                <td className="w-2/12 text-center">
                  {typeof data.email === "object"
                    ? data.email.email
                    : data.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameWatchList;
