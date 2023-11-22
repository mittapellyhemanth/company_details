import { useEffect, useState } from "react";
import DesignerStatus from "../../ProjectStatus/DesignerStatus";
import axios from "axios";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";

export default function ProjDesignerSearchView() {
    const [error, setError] = useState('');
    const [projectStatusData, setProjectStatusData] = useState([]);
  
    useEffect(() => {
      const encryptedProjectData = localStorage.getItem('DesignerSearch');
      const decryptedProjectData = CryptoJS.AES.decrypt(encryptedProjectData, "employeeDesignerSearch").toString(CryptoJS.enc.Utf8);
      const formData = JSON.parse(decryptedProjectData);
  
      const fetchFilteredData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/filter/designer/search`,
            { params: formData }
          );
  
          if (response.status === 200) {
            if (response.data.error) {
              setError(response.data.error);
            } else {
              setProjectStatusData(response.data.data);
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setError('Failed to fetch data');
        }
      };
  
      fetchFilteredData();
    }, []); 
  
    const navigate = useNavigate('');
  
    const handleGoBack = () => {
      return navigate('/v2/das/designer/pro/view');
    };
  
    return (
      <div className="project-status">
        <button className="cancel-btn" onClick={handleGoBack}>BACK</button>
        {error ? (
          <div>Error: {error}</div>
        ) : (
          <DesignerStatus data={projectStatusData} comesFrom="designer" />
        )}
      </div>
    );
  }
  