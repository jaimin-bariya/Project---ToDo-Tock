import { Link } from "react-router-dom";

const ProjectUpdates = () => {
  return (
    <>
      <p className="mb-2">Project Updates - <Link className=" font-sans hover:text-orange-600 hover:font-semibold" to='/123/projects' >Projects</Link> </p>
      <hr />
    </>
  );
};

export default ProjectUpdates;