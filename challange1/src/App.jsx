import "./App.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().email().required("Email is required"),
    age: yup.number("Age must be a number").positive("Age must be a positive number").required("Age is required"),
    password: yup.string().matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/
      ,
      'password must contain at least 4 characters,uppercase,lowercase,number and one special case character'
    ).required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
    <form
    onSubmit={handleSubmit(onSubmit)}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "50%",
      margin: "0 auto",
      background: "linear-gradient(to right, blueviolet, #ff7f50)",
      padding: "20px",
      borderRadius: "8px",
    }}
  >
    <>
      <input
        type="text"
        placeholder="Full name"
        {...register("fullName")}
        style={{
          border: "none",
          borderBottom: "1px solid #ccc",
          borderRadius: "4px",
          padding: "8px",
          margin: "10px 0",
          width: "100%",
          backgroundColor: "#fff",
        }}
      />
      <p style={{ color: "red" }}>{errors.fullName?.message}</p>
    </>
    <>
      <input
        type="text"
        placeholder="Email..."
        {...register("email")}
        style={{
          border: "none",
          borderBottom: "1px solid #ccc",
          borderRadius: "4px",
          padding: "8px",
          margin: "10px 0",
          width: "100%",
          backgroundColor: "#fff",
        }}
      />
      <p style={{ color: "red" }}>{errors.email?.message}</p>
    </>
    <>
      <input
        type="number"
        placeholder="Age..."
        {...register("age")}
        style={{
          border: "none",
          borderBottom: "1px solid #ccc",
          borderRadius: "4px",
          padding: "8px",
          margin: "10px 0",
          width: "100%",
          backgroundColor: "#fff",
        }}
      />
      <p style={{ color: "red" }}>{errors.age?.message}</p>
    </>
    <>
      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
        style={{
          border: "none",
          borderBottom: "1px solid #ccc",
          borderRadius: "4px",
          padding: "8px",
          margin: "10px 0",
          width: "100%",
          backgroundColor: "#fff",
        }}
      />
      <p style={{ color: "red" }}>{errors.password?.message}</p>
    </>
    <>
      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("confirmPassword")}
        style={{
          border: "none",
          borderBottom: "1px solid #ccc",
          borderRadius: "4px",
          padding: "8px",
          margin: "10px 0",
          width: "100%",
          backgroundColor: "#fff",
        }}
      />
      <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
    </>
    <input
      type="submit"
      value="Submit"
      style={{
        width: "50%",
        padding: "10px",
        margin: "20px 0",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    />
  </form>
  
  
  
    </>
  );
}

export default App;