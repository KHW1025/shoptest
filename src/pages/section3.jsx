import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Section3() {
  let Box = styled.div`
    border: 10px solid tomato;
    width: 500px;
    height: 50px;
  `;
  let Btn = styled.button`
    background-color: ${(props) => (props.bg === "blue" ? "white" : "black")};
    padding: 1rem;
    color: red;
  `;
  return (
    <>
      <Outlet></Outlet>
      <Box className="mw">Section 3 content</Box>
      <div className="sec3 mw">
        <p>ТОНКИЙ ПОДХОД К СВОЕМУ ДЕЛУ</p>
        <p>
          Каждое украшение, начиная от эскиза и заканчивая готовым ювелирным
          изделием, мы создаем вручную, раскручивая витиеватую нить собственной
          фантазии
        </p>
      </div>
      <Btn bg="orange">오렌지 버튼</Btn>
      <Btn bg="blue">파란색 버튼</Btn>
    </>
  );
}

export default Section3;
