//import { fb } from 'service';
//import { useEffect } from 'react';
import { useAuth, useResolved } from 'hooks';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Login, Signup, Chat } from 'components';
import { useEffect } from 'react';

export const App = () => {
  /* useEffect(() => {
    fb.firestore
      .collection('chatUsers')
      .where('userName', '==', 'test')
      .get()
      .then(res => {
        const user = res.docs[0]?.data();
        console.log(user);
      });
  }, []);

  return <>Success</>; */

  const history = useHistory();
  const { authUser } = useAuth();
  const authResolved = useResolved(authUser);

  useEffect(() => {
    if (authResolved) {
      history.push(!!authUser ? '/' : '/login');
    }
  }, [authUser, authResolved, history]);

  /*useEffect(() => {
    console.log('AUTH USER: ', authUser);
  }, [authUser]);*/

  return (
    <div className="app">
      <Switch>
        <Chat exact path="/" component={Chat} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};
