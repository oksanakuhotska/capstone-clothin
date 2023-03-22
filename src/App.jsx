import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { RouterProvider } from 'react-router-dom';

import router from './router/index';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';

import { setCurrentUser } from './store/user/user.reducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
			const pickedUser = 
				user && (({ accessToken, email }) => ({ accessToken, email }))(user);

      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, []);

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App;
