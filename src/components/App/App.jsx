//import { fb } from 'service';
//import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Signup, Chat } from 'components';

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

  return (
    <Switch>
      <Chat exact path="/" component={Chat} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};
