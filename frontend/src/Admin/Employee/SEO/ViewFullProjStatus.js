import { useContext } from "react";
import DetailsContext from "../../../Context/CreateContext";

export default function ViewFullProjStatus() {
  const { projectStatusData } = useContext(DetailsContext);
  console.log(projectStatusData);

  return (
    <>
      <div className="project-status">
        <div className="project-view">
          <h2>{projectStatusData.ProjectTitle}</h2>
          <div className="project-details">
            <div className="project-content-box">
              <div className="project-matter">
                <label><strong>SUBMIT DATE : </strong></label>
                <div className="proj-date">{projectStatusData.Date}</div>
              </div>
              <div className="project-keyword">
                <label><strong>BACKLINK :</strong> </label>
                <div className="project-link proj-link">
                  <a
                    href={projectStatusData.BackLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {projectStatusData.BackLink}
                  </a>
                </div>
              </div>
              
              <div className="project-keyword">
               
                <label><strong>KEYWORD :</strong> </label>
                <div className=" proj-keyword">{projectStatusData.Keyword}</div>
              </div>
              <div className="project-matter">
                
                <label><strong>TYPE :</strong> </label>
                <div className="proj-type">{projectStatusData.Type}</div>
              </div>
              <div className="project-matter">
                
                
                <label><strong>STATUS :</strong> </label>
                <div className="proj-status">{projectStatusData.Status}</div>
              </div>
              <div className="project-keyword">
               
                <label><strong>REMARK :</strong> </label>
                <div className="proj-keyword">{projectStatusData.Remark}</div>
              </div>
              <div className="project-matter">
                
                 
                <label><strong>TIME TAKEN :</strong> </label>
                <div className="proj-timetaken">{projectStatusData.TimeTaken}</div>
              </div>
             
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
