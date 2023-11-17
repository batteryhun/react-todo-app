import { useForm } from "react-hook-form";
import { atom } from "recoil";

// interface IForm {
//   Email: string;
//   username: string;
//   password: string;
//   password1: string;
//   extraError?: string;
// }

// function ToDoList() {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     setError,
//   } = useForm<IForm>({
//     defaultValues: {
//       Email: "@naver.com",
//     },
//   });
//   const onVaild = (data: IForm) => {
//     if (data.password !== data.password1) {
//       return setError(
//         "password1",
//         { message: "Password are not the same" },
//         { shouldFocus: true }
//       );
//     }
//     // setError("extraError", { message: "server offline" });
//   };

//   return (
//     <div>
//       <form
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "1px",
//           alignItems: "center",
//         }}
//         onSubmit={handleSubmit(onVaild)}
//       >
//         <input
//           {...register("Email", {
//             required: "Email is required",
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "Only @naver.com E-mails allowed!",
//             },
//           })}
//           placeholder="ABC@naver.com"
//         />
//         <span>{errors?.Email?.message as string}</span>
//         <input
//           {...register("username", {
//             required: "username is required",
//             validate: {
//               noPoco: (value) =>
//                 value.includes("poco") ? "No poco allowed" : true,
//             },
//           })}
//           placeholder="username"
//         />
//         <span>{errors?.username?.message as string}</span>
//         <input
//           {...register("password", { required: "password is required" })}
//           placeholder="password"
//         />
//         <span>{errors?.password?.message as string}</span>
//         <input
//           {...register("password1", {
//             required: "Password is required",
//             minLength: {
//               value: 5,
//               message: "your password is too short",
//             },
//           })}
//           placeholder="password1"
//         />
//         <span>{errors?.password1?.message as string}</span>
//         <span>{errors?.extraError?.message as string}</span>
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

const toDoState = atom({
  key: "toDo",
  default: [],
});

interface IForm {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    setValue("toDo", "");
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form>
        <input
          {...register("toDo", {
            required: "please write a todo",
          })}
          onSubmit={handleSubmit(handleValid)}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
}

export default ToDoList;
