import { useParams, useNavigate } from "react-router-dom";

function Details(props) {
  let { id } = useParams();
  let findId = props.data.find(function (x) {
    return x.id == id;
  });
  id = Number(id);

  let navigate = useNavigate();
  return (
    <div>
      <h1>디테일페이지 </h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        이전으로
      </button>
      <div>{findId.title}</div>
      <img src={`/img/${findId.img}`} alt={findId.title} />
    </div>
  );
}

export default Details;
