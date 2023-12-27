import { useParams } from "react-router-dom";

function UpdateApplicationPage() {
  const { basvuruNo } = useParams();

  // Add your update logic here using basvuruNo

  return (
    <div>
      <h2>Update Application #{basvuruNo}</h2>
      heyyyyyyyy
    </div>
  );
}

export default UpdateApplicationPage;
