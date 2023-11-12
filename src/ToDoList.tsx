import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, formState, handleSubmit } = useForm();
  const onVaild = (data: any) => {};
  return (
    <div>
      <form onSubmit={handleSubmit(onVaild)}>
        <input
          {...register("toDo", { required: true })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
