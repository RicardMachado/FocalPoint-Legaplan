import { Trash } from "lucide-react";
import styles from "./cardToDo.module.scss";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { DeleteTaskDialog } from "../delete-task-dialog";

interface CardToDoProps {
  title: string;
  isCompleted?: boolean;
  handleClickDelete: () => void;
  handleCheck?: () => void;
}

export function CardToDo({
  title,
  isCompleted=false,
  handleCheck,
  handleClickDelete
}: CardToDoProps) {
  const [isDeleteTaskOpen, setIsDeleteTaskOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Checkbox
        className={`${styles.checkbox} ${isCompleted ? styles.check : styles.noCheck}`}
        checked={isCompleted}
        onCheckedChange={handleCheck}
      />
      <p className={`${styles.title} ${isCompleted ? styles.completed : styles.incomplete}`}>
        {title}
      </p>
      <Dialog open={isDeleteTaskOpen} onOpenChange={setIsDeleteTaskOpen}>
        <DialogTrigger asChild>
          <Trash color="#B0BBD1" onClick={() => setIsDeleteTaskOpen(true)} />
        </DialogTrigger>
        <DeleteTaskDialog handlerDeleteTask={handleClickDelete} />
      </Dialog>
    </div>
  );
}