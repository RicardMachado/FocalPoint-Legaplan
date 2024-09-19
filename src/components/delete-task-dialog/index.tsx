import { Button } from "../ui/button";
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import styles from "./DeleteTaskDialog.module.scss";

interface DeleteTaskDialogProps {
  handlerDeleteTask: () => void
}

export function DeleteTaskDialog({ handlerDeleteTask }: DeleteTaskDialogProps) {
  return (
    <DialogContent className={styles.container}>
      <DialogHeader>
        <DialogTitle className={styles.dialogTitle}>Deletar tarefa</DialogTitle>
      </DialogHeader>

      <p className={styles.description}>Tem certeza que você deseja deletar essa tarefa?</p>

      <DialogFooter className={styles.dialogFooter}>
        <DialogClose asChild>
          <Button className={styles.buttonCancel}>Cancelar</Button>
        </DialogClose>
        <Button className={styles.buttonDelete} onClick={handlerDeleteTask}>Deletar</Button>
      </DialogFooter>
    </DialogContent>
  );
}