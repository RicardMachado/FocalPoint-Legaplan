import styles from "./toDoList.module.scss";

interface ToDoListProps {
  children?: React.ReactNode
}

export function ToDoList({ children }: ToDoListProps) {
  return (
    <div className={styles.container}>
      <p>Suas tarefas de hoje</p>
      { children }
    </div>
  );
}