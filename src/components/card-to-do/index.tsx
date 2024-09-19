import { Trash } from "lucide-react";
import styles from "./cardToDo.module.scss";
import { Checkbox } from "@radix-ui/themes";

interface CardToDoProps {
  title: string;
  isCompleted?: boolean;
}

export function CardToDo({ title, isCompleted=false }: CardToDoProps) {
  return (
    <div className={styles.container}>
      <Checkbox checked={isCompleted} className={`${styles.checkbox} ${isCompleted ? styles.check : styles.noCheck}`} />
      <p className={`${styles.title} ${isCompleted ? styles.completed : styles.incomplete}`}>
        {title}
      </p>
      <Trash color="#B0BBD1"/>
    </div>
  );
}