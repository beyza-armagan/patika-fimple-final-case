//import { useData } from "../context/DataContext";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ApplicationList() {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/admin/basvuru-listesi"
        );
        console.log(response);
        setApplications(response.data);
      } catch (error) {
        // Handle network error or other exceptions
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = (applicationCode) => {
    // Handle update logic here, e.g., navigate to update page
    console.log(`Update application with number ${applicationCode}`);
    navigate(`/admin/basvuru/${applicationCode}`);
  };

  return (
    <div className="mt-8">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Status</th>
            <th className="border p-2">Application Number</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Surname</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">TC</th>
            <th className="border p-2">Application Reason</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Additional Info</th>
            <th className="border p-2">Update</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.applicationCode}>
              <td className="border p-2">{application.status}</td>
              <td className="border p-2">{application.applicationCode}</td>
              <td className="border p-2">{application.name}</td>
              <td className="border p-2">{application.surname}</td>
              <td className="border p-2">{application.age}</td>
              <td className="border p-2">{application.tc}</td>
              <td className="border p-2">{application.applicationReason}</td>
              <td className="border p-2">{application.address}</td>
              <td className="border p-2">{application.additionalInfo}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleUpdate(application.applicationCode)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="#" onClick={handleGoBack}>
        Go Back
      </Link>
    </div>
  );
}

export default ApplicationList;
