//import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

function ApplicationList() {
  const navigate = useNavigate();

  //const { data } = useData();

  const dummyData = [
    {
      applicationNumber: "12345",
      name: "John",
      surname: "Doe",
      age: 25,
      tc: "12345678901",
      applicationReason: "Lorem ipsum",
      address: "123 Main St, City",
      additionalInfo: "Lorem ipsum additional info",
    },
    {
      applicationNumber: "67890",
      name: "Jane",
      surname: "Doe",
      age: 30,
      tc: "98765432101",
      applicationReason: "Dolor sit amet",
      address: "456 Oak St, Town",
      additionalInfo: "Dolor sit amet additional info",
    },
  ];

  const handleUpdate = (applicationNumber) => {
    // Handle update logic here, e.g., navigate to update page
    console.log(`Update application with number ${applicationNumber}`);
    navigate(`/admin/basvuru/${applicationNumber}`);
  };

  return (
    <div className="mt-8">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
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
          {dummyData.map((application) => (
            <tr key={application.applicationNumber}>
              <td className="border p-2">{application.applicationNumber}</td>
              <td className="border p-2">{application.name}</td>
              <td className="border p-2">{application.surname}</td>
              <td className="border p-2">{application.age}</td>
              <td className="border p-2">{application.tc}</td>
              <td className="border p-2">{application.applicationReason}</td>
              <td className="border p-2">{application.address}</td>
              <td className="border p-2">{application.additionalInfo}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleUpdate(application.applicationNumber)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApplicationList;
