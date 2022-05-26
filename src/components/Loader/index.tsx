import ImgLoading from '../../img/Curve-Loading.gif'

function Loader() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={ImgLoading} alt="loading" />
    </div>
  );
}

export default Loader;
