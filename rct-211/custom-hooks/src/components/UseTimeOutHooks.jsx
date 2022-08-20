
import useTimeOut from "../Hook/useTimeOut";

const UseTimeOutHooks = () => {
  const ready = useTimeOut(5000);
  return (
    <div>
      <h3>Timeout</h3>
      <div>{ready ? "Ready" : "Not-Ready"}</div>
    </div>
  );
};

export default UseTimeOutHooks;
