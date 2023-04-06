import { useParams, useNavigate } from "react-router-dom";

function Details(props) {
  let { id } = useParams();
  console.log("Number하기 전", typeof id);
  // string
  console.log("파라미터", id);
  console.log("디테일", props.data);

  let findId = props.data.find(function (x) {
    // props.data 배열에서 find() 메소드를 사용해서
    // 조건에 맞는 첫번째 요소를 찾는다.
    return x.id == id;
    // 객체의 ID 속성 값이 id 변수와 같은지 비교해서
    // true 인 경우 해당 요소를 반환한다는 의미
  });

  // id = Number(id);
  // console.log("Number한 후", typeof id);
  // // number

  let navigate = useNavigate();
  // -1 이면 이전 페이지, -2면 두단계 전의 페이지
  // history를 기억한다.

  return (
    <div>
      <h1>디테일 페이지</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        이전으로
      </button>
      <div>{findId.id + 1}</div>
      {/* 연산할 때 자동으로 숫자로 변환됨 */}
      <div>{findId.title}</div>
      <img src={`/img/${findId.img}`} alt={findId.title} />
    </div>
  );
}

export default Details;
