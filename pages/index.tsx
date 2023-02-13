import Layout from '../component/Layout'
import Image from 'next/image';
export default function Home() {
  return (
    <Layout>
      <h1>Welcome</h1>
      <Image src="/Kabinet.png" width="1000" height="200" alt="Kabinet" />
      <h2>Kabinet Akansha</h2>
      <p>Akansha dalam Bahasa India mempunyai arti harapan dan keinginan. Hal ini sangat sesuai dengan Visi HIMATEK UAI periode 2022/2023 yang berbunyi “Mewujudkan himpunan sebagai ruang untuk mewadahi masyarakat Teknik Elektro UAI dengan orientasi kebermanfaatan dan profesionalisme”. Visi yang telah dibuat ini sangat memiliki harapan yang baik untuk masa depan Teknik Elektro UAI. Keinginan yang kuat juga sangat dibutuhkan agar Visi tersebut tercapai sebagaimana mestinya. </p>
      <p>Selain itu, Akansha mempunyai karakteristik pelopor, pemimpin, bebas, dan pekerja keras. Dalam menjalani sebuah organisasi dibutuhkan pemimpin yang hebat untuk masa depan HIMATEK UAI akan seperti apa kedepannya. Menurut UUD 1945 Pasal 28E ayat (3) menyatakan bahwa “Setiap orang berhak atas kebebasan berserikat, berkumpul, dan berpendapat”, hal ini sangat sesuai dengan salah satu karakteristik Akansha dan juga harus diterapkan pada HIMATEK UAI. Organisasi membutuhkan sekumpulan orang yang bekerja keras untuk mewujudkan hal yang diinginkan seperti Misi HIMATEK UAI yaitu “Memfasilitasi mahasiswa berprestasi jurusan Teknik Elektro UAI”. </p>

      <h2>Makna Logo</h2>
      <Image src="/Makna logo1.png" width="1000" height="300" alt="Makna logo1" />
      <Image src="/Makna logo2.png" width="1000" height="300" alt="Makna logo2" />
    </Layout>
  )
}