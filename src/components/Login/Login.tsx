import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { logIn } from '../../redux/auth/authOperations';
// import style from './Login.module.css';
import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = {
  FormControl: {
    display: 'flex',
    marginBottom: '20px',
  },
};

export default function Login() {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.warn(`error`);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormControl style={styles.FormControl}>
        <InputLabel>Enter email</InputLabel>
        <Input
          //   className={style.input}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl style={styles.FormControl}>
        <InputLabel>Password</InputLabel>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </FormControl>
      <Button
        // className={style.LoginButton}
        type="submit"
        variant="outlined"
        color="primary"
      >
        Log In
      </Button>
    </form>
  );
}
