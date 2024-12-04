import React from "react";

//we can destructure the params here from [id] folder
const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div className="text-3xl">User Details Page {id}</div>;
};

export default page;
