import { useParams } from "react-router-dom";

const PageNotFound = () => {
  const { badPage } = useParams();
  // path: ":badPage/*",
  // use [ * ] for the missing url
  // use [ :badPage/ ] for getting the missing url
  return (
    <div className="text-center  font-bold my-20">
      <h1 className="text-red-500 text-6xl">Page Not Found</h1>
      <h2 className="text-2xl mt-4">Error 404</h2>
      <h3 className="text-xl">
        The requested URL
        <span className="text-red-500 mx-2">{` ${badPage} `}</span>was not found
        on the website.
        <span className="text-gray-200/50"> That's all we know.</span>
      </h3>
    </div>
  );
};

export default PageNotFound;
