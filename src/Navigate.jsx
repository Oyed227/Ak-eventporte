import { useNavigate } from "react-router-dom";

function Navigate () {

    const navigate = useNavigate();
    return (
      <div>
        <button onClick={() => navigate("/home")}>Go Home</button>
      </div>
    );
}



export default Navigate;