import SeoStatus from "../../ProjectStatus/SeoStatus";
import CryptoJS from "crypto-js";

export default function ProjectSeoStatus(){
  const encryptedProjectData = localStorage.getItem('seoProject');
  const decryptedProjectDatay = CryptoJS.AES.decrypt(encryptedProjectData, "SeosecretKey").toString(CryptoJS.enc.Utf8);
  const ProjectData = JSON.parse(decryptedProjectDatay);
    return<>
     <div className="project-status">

      <SeoStatus data={ProjectData}/>
     </div>
    </>
}