import Header from "../components/Header/Header";

import Remote from "../components/Remote/Remote";
import Function from "../components/Function/Function";
import ScrollComponent from "../components/ScrollComponent/ScrollComponent";
import Productivity from "../components/Productivity/Productivity";
import Next from "../components/Next/Next";
import New from "../components/New/New";
import Start from "../components/Start/Start";

const index = () => {
  return (
    <>
      <Content>
        <Header />
        <Remote />
        <Function />
        <ScrollComponent />
        <Productivity />
        <Next />
        <New />
        <Start />
      </Content>
    </>
  );
};

export default index;
