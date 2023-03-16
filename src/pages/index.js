import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GraphQLClient, gql} from 'graphql-request';
import request from 'graphql-request'
import { useEffect, useState } from 'react';
import BlogPost   from '../../Components/Blogcard';

const inter = Inter({ subsets: ['latin'] })
//API Key
const gcms = new GraphQLClient('https://api-ap-south-1.hygraph.com/v2/clfb7gjz22rzm01upg2oe9xth/master');
//query
const QUERY = gql`
{
  posts {
    id
    title
    slug
    datePub
    author {
      id
    }
    content {
      text
    }
  }
}`;

export async function getStaticProps(){
  const {posts} = await gcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home(posts) {

  const [post, setpost] = useState([]);

  useEffect

  return (
    <>
      <Head>
        <title>Future With Pharma</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {
        posts.map((post)=>(
        <BlogCard title={post.title} 
        author={post.author} 
        coverimage={post.coverimage} 
        key={post.id} 
        date={post.date} 
        slug={post.slug}
        ></BlogCard>
        )
        )
        }
      
      </main>
    </>
  )
}
