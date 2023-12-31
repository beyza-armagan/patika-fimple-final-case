import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SearchDetails() {
  const { basvuruNo } = useParams();
  const [applicationDetails, setApplicationDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "Cevaplanmadı":
        return "text-blue-500 font-medium";
      case "Bekliyor":
        return "text-yellow-500 font-medium";
      case "Çözüldü":
        return "text-green-500 font-medium";
      case "İptal Edildi":
        return "text-red-500 font-medium";
      default:
        return "";
    }
  };

  useEffect(() => {
    const fetchApplicationDetails = async () => {
      try {
        const response = await axios.get(
          `https://ticketsystem-ts7l.onrender.com/basvuru-sorgula/basvuru/${basvuruNo}`
        );
        setApplicationDetails(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("Bu başvuru numarasıyla bir kayıt bulunamadı.");
        } else {
          setError("Bir hata oluştu.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchApplicationDetails();
  }, [basvuruNo]);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (error) {
    return (
      <>
        <p className="text-xl font-bold mb-4">404</p>
        <p className="text-l font-bold mb-4">{error}</p>
      </>
    );
  }

  return (
    <>
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md mb-6">
        <h2 className="text-2xl font-bold mb-4">Başvuru #{basvuruNo}</h2>
        <div className="mb-2">
          <label className="font-bold">Ad:</label>
          <span className="ml-2">{applicationDetails.name}</span>
        </div>
        <div className="mb-2">
          <label className="font-bold">Soyad:</label>
          <span className="ml-2">{applicationDetails.surname}</span>
        </div>
        <div className="mb-2">
          <label className="font-bold">Yaş:</label>
          <span className="ml-2">{applicationDetails.age}</span>
        </div>
        <div className="mb-2">
          <label className="font-bold">TC:</label>
          <span className="ml-2">{applicationDetails.tc}</span>
        </div>
        <div className="mb-2">
          <label className="font-bold">Başvuru Nedeni:</label>
          <span className="ml-2">{applicationDetails.applicationReason}</span>
        </div>
        <div className="mb-2">
          <label className="font-bold">Adres:</label>
          <span className="ml-2">{applicationDetails.address}</span>
        </div>
        <div className="mb-2 text-center">
          <label className="font-bold">Fotoğraflar:</label>
          <span className="ml-2">
            <img src={applicationDetails.image} className="mx-auto" />
          </span>
        </div>

        <div className="mb-2">
          <label className="font-bold">Başvuru Cevabı:</label>
          <span className="ml-2">{applicationDetails.adminResponse}</span>
        </div>
        <div className="mb-2">
          <label className="font-bold">Başvuru Durumu:</label>

          <span
            className={`inline-block px-2 py-1 rounded-full ${getStatusColor(
              applicationDetails.status
            )}`}
          >
            {applicationDetails.status}
          </span>
        </div>
      </div>
    </>
  );
}

export default SearchDetails;
