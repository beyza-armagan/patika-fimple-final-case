//import { useData } from "../context/DataContext";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ApplicationDetailsModal from "./ApplicationDetailsModal";

function ApplicationList() {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const handleViewDetails = (application) => {
    setSelectedApplication(application);
  };

  const closeModal = () => {
    setSelectedApplication(null);
  };
  const handleGoBack = () => {
    navigate(-1); // go back to the previous page
  };

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/admin");
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ticketsystem-ts7l.onrender.com/admin/basvuru-listesi"
        );
        console.log(response);
        setApplications(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = (applicationCode) => {
    console.log(`Update application with number ${applicationCode}`);
    navigate(`/admin/basvuru/${applicationCode}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Cevaplanmadı":
        return "bg-gray-500 text-white";
      case "Bekliyor":
        return "bg-yellow-500 text-white";
      case "Çözüldü":
        return "bg-green-500 text-white";
      case "İptal Edildi":
        return "bg-red-500 text-white";
      default:
        return "";
    }
  };

  // sort unanswered applications
  const sortedApplications = applications.sort((a, b) => {
    if (a.status === "Cevaplanmadı" && b.status !== "Cevaplanmadı") {
      return -1;
    } else if (a.status !== "Cevaplanmadı" && b.status === "Cevaplanmadı") {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <>
      <div className="relative overflow-x-auto mt-8 mb-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Başvuru Durumu
              </th>
              <th scope="col" className="px-6 py-3">
                Başvuru Numarası
              </th>
              <th scope="col" className="px-6 py-3">
                Ad
              </th>
              <th scope="col" className="px-6 py-3">
                Soyad
              </th>
              <th scope="col" className="px-6 py-3">
                Yaş
              </th>
              <th scope="col" className="px-6 py-3">
                TC
              </th>
              <th scope="col" className="px-6 py-3">
                Başvuru Nedeni
              </th>
              <th scope="col" className="px-6 py-3">
                Adres
              </th>
              <th scope="col" className="px-6 py-3">
                Fotoğraflar/ Ekler
              </th>
              <th scope="col" className="px-6 py-3">
                Başvuruyu Görüntüle
              </th>
              <th scope="col" className="px-6 py-3">
                Başvuruyu Güncelle
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedApplications.map((application) => (
              <tr
                key={application.applicationCode}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-2 py-1 rounded-full ${getStatusColor(
                      application.status
                    )}`}
                  >
                    {application.status}
                  </span>
                </td>

                <td className="px-6 py-4">{application.applicationCode}</td>
                <td className="px-6 py-4">{application.name}</td>
                <td className="px-6 py-4">{application.surname}</td>
                <td className="px-6 py-4">{application.age}</td>
                <td className="px-6 py-4">{application.tc}</td>
                <td className="px-6 py-4">{application.applicationReason}</td>
                <td className="px-6 py-4">{application.address}</td>
                <td className="px-6 py-4">
                  <img src={application.image} />
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleViewDetails(application)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Görüntüle
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleUpdate(application.applicationCode)}
                    className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-950"
                  >
                    Güncelle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {selectedApplication && (
            <ApplicationDetailsModal
              application={selectedApplication}
              closeModal={closeModal}
            />
          )}
        </table>
      </div>

      <Link
        to="#"
        onClick={handleGoBack}
        className="text-blue-500 hover:underline font"
      >
        Geri Dön
      </Link>
    </>
  );
}

export default ApplicationList;
