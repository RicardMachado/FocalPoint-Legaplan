'use cliente'
import { useState } from "react";
import { Button } from "../ui/button";
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import styles from "./createTaskDialog.module.scss";

interface CreateTaskDialogProps {
  handlerAddTask: (newTask: string) => void
}

export function CreateTaskDialog({ handlerAddTask }: CreateTaskDialogProps) {
  const [newTask, setNewTask] = useState<string>('');

  return (
    <DialogContent className={styles.container}>
      <DialogHeader>
        <DialogTitle className={styles.dialogTitle}>Nova tarefa</DialogTitle>
      </DialogHeader>

      <div className={styles.content}>
        <label htmlFor="title" className={styles.contentLabel}>
          Título
        </label>
        <input
          className={styles.contentInput}
          id="title"
          placeholder="Digite"
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>

      <DialogFooter className={styles.dialogFooter}>
        <DialogClose asChild>
          <Button className={styles.buttonCancel}>Cancelar</Button>
        </DialogClose>
        <Button className={styles.buttonAdd} onClick={() => handlerAddTask(newTask)}>Adicionar</Button>
      </DialogFooter>
    </DialogContent>
  );
}