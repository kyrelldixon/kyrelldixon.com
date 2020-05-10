import { getAllPostPaths, getPostData } from "../../lib/posts";

export default function BlogPost({ postData }) {
  console.log({ postData });
  return (
    <div>
      <article className="max-w-2xl mx-auto">
        <header className="text-center">
          <h1 className="mb-10 text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl xl:text-8xl">
            {postData.title}
          </h1>
          <h2 className="mb-6 text-2xl leading-snug">{postData.excerpt}</h2>
        </header>
        <main
          className="space-y-4"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        ></main>
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostPaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.post);

  return {
    props: {
      postData,
    },
  };
}
