import Head from 'next/head'
import Typography from '@material-ui/core/Typography'

export default function Home () {
  return (
    <>
      <Head>
        <title>HOME - BinGoal</title>
      </Head>
      <Typography variant="h1" component="h1">BinGoal</Typography>
    </>
  )
}

// import Head from 'next/head'
// import Link from 'next/link'
// import styles from 'styles/Home.module.scss'

// export default function Home () {
//   return (
//     <>
//       <Head>
//         <title>HOME - BinGoal</title>
//       </Head>

//       <main>
//         <h1 className={styles.title}>
//           Welcome to{' '}
//           <Link href="/play">
//             <a>BinGoal!</a>
//           </Link>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>
//     </>
//   )
// }
