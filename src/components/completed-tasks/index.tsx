import styles from "./completedTasks.module.scss";

interface CompletedTasksProps {
  children?: React.ReactNode
}

export function CompletedTasks({ children }: CompletedTasksProps) {
  return (
    <div className={styles.container}>
      <p>Tarefas finalizadas</p>
      { children }
    </div>
  );
}