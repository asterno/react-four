import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { countSlice } from "../../store/reducers/countReducer";

const CounterWithState = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setcount((prev) => prev + 1)}>+</button>
      <button onClick={() => {
        if(count <= 0) {
            setcount((prev) => prev)
            return
        }
        setcount((prev) => prev - 1)}
      }>-</button>
    </div>
  );
};

const CounterWithStore = () => {
  const { increment, decrement } = countSlice.actions;
  const { count } = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();
  console.log(increment(1));

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <button onClick={() => dispatch(increment(Math.ceil(Math.random()*100)))}>RND+</button>
      <button onClick={() => dispatch(decrement(Math.ceil(Math.random()*100)))}>RND-</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <CounterWithState />
      <hr />
      <CounterWithStore />
    </div>
  );
};

export default App;
       
//3 урок:property dream,key,consumer,вложенность,деструктуризация,router dom,routes,route,navigate,usenavigate,динамические ссылки,useParams
//4 урок:useSelector,actions(),dispatch (acrions()),useDispatch,Provider,   