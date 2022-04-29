import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ReactLoading type="bars" color="white" />
    </div>
  );
};

export default Loading;
