import { Link } from "react-router-dom";

const AssignedTask = () => {
  return (
    <>
        <p className="mb-2">Assigned Tasks- <Link className=" font-sans hover:text-orange-600 hover:font-semibold" to='/123/projects' >Project</Link> </p>
        <hr />
    </>
  );
};

export default AssignedTask;