import Footer from "@/Components/Footer/Footer";
import Link from "next/link";
import Banner from "./comments/Banner/Banner";

export default function Home({ posts }) {
  return (
    <div className="text-center">
      <Banner />
      <div>
        {
          posts?.map(post => <div key={post.id} className="card mt-10 bg-base-100 shadow-xl mx-10 my-10">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post?.body}</p>
            </div>
          </div>)
        }
        <Link href='/posts'>
          <button className="btn btn-primary content-center">See More</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  const data = await res.json();

  return {
    props: {
      posts: data
    }
  }
}


