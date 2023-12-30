import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateApplicationPage() {
  const navigate = useNavigate();
  const [ticketInfo, setTicketInfo] = useState(null);
  const [adminResponse, setAdminResponse] = useState("");
  const [status, setStatus] = useState("Cevaplanmadı");
  const { basvuruNo } = useParams();

  console.log(basvuruNo);

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchTicketInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/basvuru/${basvuruNo}`
        );
        setTicketInfo(response.data);
      } catch (error) {
        console.error("Error fetching ticket information:", error);
      }
    };

    fetchTicketInfo();
  }, [basvuruNo]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/admin/basvuru/${basvuruNo}`, {
        adminResponse,
        status,
      });

      navigate(-1);
    } catch (error) {
      console.error("Error updating ticket information:", error);
    }
  };

  if (!ticketInfo) {
    return <p className="block font-bold">Loading...</p>;
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Update Application #{basvuruNo}
      </h2>
      <div className="mb-2">
        <label className="font-bold">Name:</label>
        <span className="ml-2">{ticketInfo.name}</span>
      </div>
      <div className="mb-2">
        <label className="font-bold">Surname:</label>
        <span className="ml-2">{ticketInfo.surname}</span>
      </div>
      <div className="mb-2">
        <label className="font-bold">Age:</label>
        <span className="ml-2">{ticketInfo.age}</span>
      </div>
      <div className="mb-2">
        <label className="font-bold">TC:</label>
        <span className="ml-2">{ticketInfo.tc}</span>
      </div>
      <div className="mb-2">
        <label className="font-bold">Application Reason:</label>
        <span className="ml-2">{ticketInfo.applicationReason}</span>
      </div>
      <div className="mb-2">
        <label className="font-bold">Address:</label>
        <span className="ml-2">{ticketInfo.address}</span>
      </div>
      <div className="mb-2">
        <label className="font-bold">Additional Info:</label>
        <span className="ml-2">{ticketInfo.additionalInfo}</span>
      </div>
      <div className="mb-2">
        <label className="font-bold">Response:</label>
        <textarea
          value={adminResponse}
          onChange={(e) => setAdminResponse(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <div className="mb-2">
        <label className="font-bold">Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="Cevaplanmadı">Cevaplanmadı</option>
          <option value="Bekliyor">Bekliyor</option>
          <option value="Çözüldü">Çözüldü</option>
          <option value="İptal Edildi">İptal Edildi</option>
        </select>
      </div>
      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit Update
      </button>
      <Link
        to="#"
        onClick={handleGoBack}
        className="block mt-2 text-blue-500 hover:underline"
      >
        Go Back
      </Link>
    </div>
  );
}

export default UpdateApplicationPage;
