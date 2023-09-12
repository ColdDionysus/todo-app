import { useEffect } from "react";
import { URLS } from "../constants";
import Title from "../components/Title";
import AddInputGroup from "../components/AddInputGroup";
import TaskAccordian from "../components/TaskAccordian";
import Loading from "../components/Loading";
import { useApiContext } from "../contexts";

function Todo() {
  const { data: tasks, error, list } = useApiContext();

  useEffect(() => {
    list({ url: URLS.TODOS });
  }, []);

  if (error) return <>{JSON.stringify(error)}</>;

  return (
    <>
      <Title title="TODO App" />
      <AddInputGroup
        label="Add new Todo?"
        placeholder="Eg. Do Laundry"
        button="Add the task"
        buttonVariant="primary"
      />
      <TaskAccordian tasks={tasks} />
      {/* <Toaster /> */}
    </>
  );
}

export default Todo;
