import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function SearchDetails() {
  const { basvuruNo } = useParams();
  const [applicationDetails, setApplicationDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplicationDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/basvuru-sorgula/basvuru/${basvuruNo}`
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
    return <p>{error}</p>;
  }

  if (!applicationDetails) {
    return <p>Bu başvur numarasıyla bir kayıt bulunamadı.</p>;
  }

  return (
    <>
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
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
        <div className="mb-2">
          <label className="font-bold">Fotoğraflar/Ekler:</label>
          <span className="ml-2">{applicationDetails.additionalInfo}</span>
        </div>
        <div className="mb-2">
          <label className="font-bold">Başvuru Cevabı:</label>
          <span className="ml-2">{applicationDetails.adminResponse}</span>
        </div>
        <div className="mb-2">
          <label className="font-bold">Başvuru Durumu:</label>
          <span className="ml-2">{applicationDetails.status}</span>
        </div>
      </div>
      <Link to="/basvuru-sorgula">Go Back</Link>
    </>
  );
}

export default SearchDetails;
