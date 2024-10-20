import { Link } from "react-router-dom";

const CurrentGoal = () => {
  return (
    <>
        <p className="mb-2">Current - <Link className=" font-sans hover:text-orange-600 hover:font-semibold" to='/123/goals' >Goal</Link> </p>
        <hr />
    </>
  );
};

export default CurrentGoal;