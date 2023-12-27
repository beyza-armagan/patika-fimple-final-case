import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

function ApplicationTracking() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };
  const { basvuruNo } = useParams();
  return (
    <div>
      App track {basvuruNo}
      <Link to="#" onClick={handleGoBack}>
        Go Back
      </Link>
    </div>
  );
}

export default ApplicationTracking;
