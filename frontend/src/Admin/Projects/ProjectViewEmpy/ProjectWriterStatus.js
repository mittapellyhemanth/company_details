
import CryptoJS from "crypto-js";
import WriterStatus from "../../ProjectStatus/WriterStatus";
export default function ProjectWriterStatus(){
  const encryptedProjectData = localStorage.getItem('writerProject');
  const decryptedProjectDatay = CryptoJS.AES.decrypt(encryptedProjectData, "WritersecretKey").toString(CryptoJS.enc.Utf8);
  const ProjectData = JSON.parse(decryptedProjectDatay);
    return<>
     <div className="project-status">
      
      <WriterStatus data={ProjectData}/>
     </div>
    </>
}