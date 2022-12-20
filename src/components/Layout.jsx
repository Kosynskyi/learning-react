import { Link, Outlet } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from 'redux/MyValue/slice';

const Layout = () => {
  // const dispatch = useDispatch();
  // const value = useSelector(state => state.myValue);
  // console.log(value);

  return (
    <div>
      <nav>
        <Link to="/login">Log in</Link>
      </nav>
      <hr />
      <Outlet />
      {/* <p>{value}</p>
      <button type="button" onClick={() => dispatch(increment(100))}>
        +
      </button>
      <button type="button" onClick={() => dispatch(decrement(100))}>
        -
      </button> */}
    </div>
  );
};

export default Layout;
