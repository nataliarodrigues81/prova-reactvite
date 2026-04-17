import { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

const Auth = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    if (!email || !password) {
      alert("Preencha email e senha!");
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCred.user);
    } catch (error) {
      alert("Erro ao cadastrar: " + error.message);
    }
  };

  const login = async () => {
    if (!email || !password) {
      alert("Preencha email e senha!");
      return;
    }

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCred.user);
    } catch (error) {
      alert("Email ou senha inválidos!");
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div>
      {!user ? (
        <>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={register}>Cadastrar</button>
          <button onClick={login}>Login</button>
        </>
      ) : (
        <div className="auth-container">
        <span className="auth-email">{user.email}</span>
        <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Auth;