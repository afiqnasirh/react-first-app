//OPTION 1

// import React from "react";

// const Card = (props) => {
//   return (
//     <div className="border  border-gray-400 w-[400px] p-4 rounded-md">
//       <h5>{props.title}</h5>
//       <p>{props?.workplace}</p>
//       <p>{props?.description || "No Description Given"}</p>
//       <p>{props?.date}</p>
//     </div>
//   );
// };

// export default Card;

// OPTION 2

// import React from "react";
// import Button from "./ui/Button";

// const Card = ({
//   title = "NO title given",
//   workplace = "No workplace given",
//   description = " No description given",
//   date,
// }) => {
//   return (
//     <div className="border  border-gray-400 w-[400px] p-4 rounded-md">
//       <h5>{title}</h5>
//       <p>{workplace}</p>
//       <p>{description}</p>
//       <p>{date}</p>
//       <Button variant="outline" onClick={handleClick} onMouseEnter={handleMouse Enter}>
//         View Job
//       </Button>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";

const Card = ({
  id,
  title = "NO title given",
  workplace = "No workplace given",
  description = " No description given",
  date = "No date given",
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("id", id);
    navigate(`/job/${id}`);
  };
  return (
    <div className="border  border-gray-400 w-[400px] p-4 rounded-md">
      <h5>{title}</h5>
      <p>{workplace}</p>
      <p>{description}</p>
      <p>{date}</p>
      <Button
        variant="solid"
        onClick={handleClick}
        onMouseEnter={() => handleMouseEnter("Yahoo!")}
      >
        ViewJob
      </Button>
    </div>
  );
};

export default Card;
