//import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ApplicationDetailsModal from "./ApplicationDetailsModal";
import { formatDate } from "../../utils/formatDate";

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
      <div className="relative overflow-x-auto mt-8 mb-4 px-8 sm:px-10 lg:px-12">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Başvuru Tarihi
              </th>
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
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  {formatDate(new Date(application.date))}
                </td>
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

                <td className="px-6 py-4">
                  <button
                    onClick={() => handleViewDetails(application)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Görüntüle
                  </button>
                </td>
                <td className="px-6 py-4 ">
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
    </>
  );
}

export default ApplicationList;
