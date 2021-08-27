import SEO from '../components/SEO';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <SEO title="Dev News!" excludeTitleSuffix />

      <main className={styles.content}>
        <section className={styles.section}>
          <span>Olá Dev!</span>
          <h1>
            Bem-vindo e bem-vinda <br />
            ao <span>Dev</span>News!
          </h1>
          <p>
            Um blog com conteúdos extremamente <br />
            <span>relevantes para o seu aprendizado.</span>
          </p>
        </section>

        <img src="/home.svg" alt="Home image" />
      </main>
    </>
  );
}

// import { GetServerSideProps } from 'next';
// import { useEffect, useState } from 'react';

// interface Post {
//   id: string;
//   title: string;
// }

// interface HomeProps {
//   posts: Post[];
// }

// export default function Home({posts}: HomeProps) {
//   // const [posts, setPosts] = useState<Post[]>([]);

//   // useEffect(() => {
//   //   fetch('http://localhost:3434/posts').then(response => {
//   //     response.json().then(data => {
//   //       setPosts(data);
//   //     });
//   //   });
//   // }, []);

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
//   const response = await fetch('http://localhost:3434/posts');
//   const posts = await response.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };
// //side serve busca na camada node e traz pronto para o navegador