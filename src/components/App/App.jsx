import { useEffect } from 'react';
import { useAuth, useResolved } from 'hooks';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Login, Signup, Chat } from 'components';
import { ChatProvider } from 'context/ChatContext';

export const App = () => {
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

  return authResolved ? (
    <ChatProvider authUser={authUser}>
      <div className="app">
        <Switch>
          <Chat exact path="/" component={Chat} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </ChatProvider>
  ) : (
    <>Loading...</>
  );
};
