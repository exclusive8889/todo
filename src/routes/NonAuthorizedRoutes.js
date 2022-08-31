
import {Route,Routes} from 'react-router-dom'

import NonAuthLayout from '../layouts/NonAuthLayout';
import Login from '../component/Auth/Auth';

function NonAuthorizedRoutes() {
    return (
        <Routes>
          <Route element={<NonAuthLayout />}>
            <Route path="sign-in" element={<Login/>} />
          </Route>
        </Routes>
      );
}
export default NonAuthorizedRoutes;