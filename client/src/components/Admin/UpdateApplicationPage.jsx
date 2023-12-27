import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

function UpdateApplicationPage() {
  const navigate = useNavigate();

  const { basvuruNo } = useParams();

  // Add your update logic here using basvuruNo
  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <div>
      <h2>Update Application #{basvuruNo}</h2>
      heyyyyyyyy
      <Link to="#" onClick={handleGoBack}>
        Go Back
      </Link>
    </div>
  );
}

export default UpdateApplicationPage;
