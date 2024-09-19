'use client' 

import { useState } from "react";
import styles from "./toDoLayout.module.scss";
import { ToDoList } from "../to-do-list";
import { CompletedTasks } from "../completed-tasks";
import { CardToDo } from "../card-to-do";
import { CreateTaskDialog } from "../create-task-dialog";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { BookCheck } from "lucide-react";

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
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);

  function addTask(newTask: string) {
    if (newTask.trim() === '') return;

    const newTaskObject: Task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, newTaskObject]);
    setIsCreateTaskOpen(false);
  };

  function toggleTaskCompletion (taskId: number) {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  function deleteTask (taskId: number) {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const incompleteTasks = tasks.filter(task => task.completed)
  const completeTasks = tasks.filter(task => !task.completed)
  
  return (
      <div className={styles.container}>
        <div className={styles.content}>
          <ToDoList>
            { completeTasks.length === 0
              ?
              <div className={styles.noTask}>
                <BookCheck />
                <p>Adicione uma nova tarefa</p>
              </div>
              :
              tasks
                .filter(task => !task.completed)
                .map(task => (
                  <CardToDo
                    key={task.id}
                    title={task.title}
                    handleCheck={() => toggleTaskCompletion(task.id)}
                    handleClickDelete={() => deleteTask(task.id)}
                  />
                )
              )
            }
          </ToDoList>
          <CompletedTasks>
            { incompleteTasks.length === 0
            ?
            <div className={styles.noTask}>
              <BookCheck />
              <p>Sem tarefa finalizada no momento</p>  
            </div>
            :
              tasks
                .filter(task => task.completed)
                .map(task => (
                  <CardToDo
                    key={task.id}
                    title={task.title}
                    isCompleted={task.completed}
                    handleClickDelete={() => deleteTask(task.id)}
                  />
                )
              )
            }
          </CompletedTasks>
        </div>
        <Dialog open={isCreateTaskOpen} onOpenChange={setIsCreateTaskOpen}>
          <DialogTrigger asChild>
            <Button className={styles.button}>Adicionar nova tarefa</Button>
          </DialogTrigger>
          <CreateTaskDialog handlerAddTask={addTask} />
        </Dialog>
      </div>
  );
}