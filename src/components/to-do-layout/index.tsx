'use client' 
import { Button, Dialog } from "@radix-ui/themes";
import styles from "./toDoLayout.module.scss";
import { ToDoList } from "../to-do-list";
import { CompletedTasks } from "../completed-tasks";
import { CardToDo } from "../card-to-do";
import { useState } from "react";
import { CreateTaskDialog } from "../create-task-dialog";

const tasksData = [
  {
    id: 1,
    title: 'Lavar as mãos',
    completed: false,
  },
  {
    id: 2,
    title: 'Fazer um bolo',
    completed: false,
  },
  {
    id: 3,
    title: 'Lavar a louça',
    completed: false,
  },
  {
    id: 4,
    title: 'Levar o lixo para fora',
    completed: true,
  },
]

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export function ToDoLayout() {
  const [tasks, setTasks] = useState<Task[]>(tasksData);
  const [newTask, setNewTask] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className={styles.container}>
        <div className={styles.content}>
          <ToDoList>
            {
            tasks
              .filter(task => !task.completed)
              .map(task => (
                <CardToDo key={task.id} title={task.title} />
              ))
            }
          </ToDoList>
          <CompletedTasks>
          {
            tasks
              .filter(task => task.completed)
              .map(task => (
                <CardToDo key={task.id} title={task.title} isCompleted={task.completed} />
              ))
            }
          </CompletedTasks>
        </div>
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Trigger>
            <Button className={styles.button}>Adicionar nova tarefa</Button>
          </Dialog.Trigger>
          <CreateTaskDialog />
        </Dialog.Root>
      </div>
  );
}