import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviews = () => {
  const loadedDatas = useLoaderData();
  const [loadedData, setLoadedData] = useState(loadedDatas);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://games-iota-two.vercel.app/games/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }

            // Filter out the deleted item from the list
            const remaining = loadedData.filter((item) => item._id !== _id);
            setLoadedData(remaining);
          });
      }
    });
  };

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
            {loadedData.map((data, index) => (
              <tr key={data._id} className="text-center">
                <th className="">{index + 1}</th>
                <td className="w-5/12">{data.title}</td>
                <td className="w-3/12">{data.description.slice(0, 30)}</td>
                <td className="w-2/12 text-center">{data.rating}</td>
                <td className="w-2/12 text-center">
                  <Link to={`/update/${data._id}`}>
                    <button className="btn ">update</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="btn "
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
