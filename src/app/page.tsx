import styles from "./page.module.scss";
import { Header } from "@/components/header";
import { ToDoLayout } from "@/components/to-do-layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <ToDoLayout />
    </div>
  );
}
