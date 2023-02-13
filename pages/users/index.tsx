import {useRouter} from 'next/router';
import Layout from '../../component/Layout';
import styles from '../../styles/Home.module.css';

interface UsersProps{
  dataUsers : Array<any>;
}

export default function Users(props: UsersProps) {
  const {dataUsers} = props;
  const router = useRouter();

  console.log(dataUsers);
  return (
    <Layout>
      {dataUsers.map((user) => (
        <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}> 
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </Layout>
    
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json()
  return {
    props : {
      dataUsers,
     }
  }
}