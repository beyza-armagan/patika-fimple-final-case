import PropTypes from "prop-types";

const ApplicationDetailsModal = ({ application, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto text-gray-900  bg-gray-800 bg-opacity-50 flex items-center justify-center text-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          Başvuru Detayları #{application.applicationCode}
        </h2>

        <div className="mb-2">
          <label className="font-bold">Ad:</label>
          <span className="ml-2">{application.name}</span>
        </div>
        <div className="mb-2">
          <label className="font-bold">Soyad:</label>
          <span className="ml-2">{application.surname}</span>
        </div>
        <div className="mb-2">
          <label className="font-bold">Yaş:</label>
          <span className="ml-2">{application.age}</span>
        </div>
        <div className="mb-2">
          <label className="font-bold">TC:</label>
          <span className="ml-2">{application.tc}</span>
        </div>
        <div className="mb-2">
          <label className="font-bold">Başvuru Nedeni:</label>
          <span className="ml-2">{application.applicationReason}</span>
        </div>
        <div className="mb-2">
          <label className="font-bold">Adres:</label>
          <span className="ml-2">{application.address}</span>
        </div>
        <div className="mb-2">
          <label className="font-bold">Fotoğraflar/ Ekler:</label>
          <img src={application.image} />
        </div>
        <div className="mb-2">
          <label className="font-bold">Başvuru Durumu:</label>
          <span className="ml-2">{application.status}</span>
        </div>
        <div className="mb-2">
          <label className="font-bold">Başvuru Cevabı:</label>
          <span className="ml-2">{application.adminResponse}</span>
        </div>
        <button
          onClick={closeModal}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

ApplicationDetailsModal.propTypes = {
  application: PropTypes.object,
  closeModal: PropTypes.func,
};

export default ApplicationDetailsModal;
