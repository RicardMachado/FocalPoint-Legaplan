import Image from "next/image";
import styles from "./header.module.scss";
import logo from '../../app/img/logo.svg'
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br')

export function Header() {
  const formattedCurrentDate = dayjs().format('dddd, DD [de] MMMM [de] YYYY').replace('-feira', '');

  return (
    <div className={styles.container}>
      <Image
        src={logo}
        alt="Logotipo FocalPoint"
      />
      <h1>Bem-vindo de volta, Ricardo</h1>
      <p>{formattedCurrentDate}</p>
    </div>
  );
}
