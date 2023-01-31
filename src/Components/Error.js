import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="pl-4">
      <h1 className="font-semibold text-red-200">Oops!!</h1>
      <h2 className="font-semibold text-red-200">Something went wrong!!</h2>
      <h2 className="font-semibold text-red-200">
        {err.status + " : " + err.statusText}
      </h2>
    </div>
  );
};

export default Error;
