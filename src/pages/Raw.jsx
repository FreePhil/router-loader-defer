import {Routes, Route, Outlet, Link} from "react-router-dom";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Error from "./Error";
import ProtectedRoute from "../ProtectedRoute";

const Raw = () => {
    return (
      <div>
        <h1>Raw page</h1>
        {/* <ProtectedRoute role={'a'} allowRoles={['a', 'b']} component={Link} to="/raw/1">Raw-One</ProtectedRoute> */}
        <Link to="/raw/1">One</Link>
        <Routes>
          <Route element={<><h1>Raw Header</h1><Outlet /></>}>
            <Route path="1" element=
            {<ProtectedRoute role={'a1'} allowedRoles={['a', 'b']} color={'red'}>
              <One style={{color: 'red'}} />
            </ProtectedRoute>} />
            <Route path="2" element={<Two />} />
          </Route>
          <Route path="3" element={<Three />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    );
  };
  
  export default Raw;