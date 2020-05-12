import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { slugify } from "./utils";

const postsDirectory = path.join(process.cwd(), "content");

export function getSortedPosts() {
  // Get file names under /posts
  const folderNames = fs.readdirSync(postsDirectory);
  const allPosts = folderNames.map((folderName) => {
    // Read markdown file as string
    const mdxFilePath = path.join(postsDirectory, folderName, "index.mdx");
    const mdFilePath = path.join(postsDirectory, folderName, "index.md");

    const fullPath = fs.existsSync(mdxFilePath) ? mdxFilePath : mdFilePath;
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const post = {
      folderName,
      ...matterResult.data,
      slug: slugify(matterResult.data.slug || matterResult.data.title),
    };

    return post;
  });

  const allPostsNotSecret = allPosts.filter((post) => !post.secret);
  // Sort posts by date
  const sortedPosts = allPostsNotSecret.sort((a, b) =>
    a.date < b.date ? 1 : -1
  );

  return sortedPosts.map((post) => ({ ...post, date: post.date.toString() }));
}

export function getPostPaths() {
  const folderNames = fs.readdirSync(postsDirectory);
  const allPosts = folderNames.map((folderName) => {
    // Read markdown file as string
    const mdxFilePath = path.join(postsDirectory, folderName, "index.mdx");
    const mdFilePath = path.join(postsDirectory, folderName, "index.md");

    const fullPath = fs.existsSync(mdxFilePath) ? mdxFilePath : mdFilePath;
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return { folderName, ...matterResult.data };
  });

  const allPostsNotSecret = allPosts.filter((post) => !post.secret);
  const slugs = allPostsNotSecret.map((post) => ({
    params: {
      post: slugify(post.slug || post.title),
    },
  }));

  return slugs;
}

export function getCategories() {
  const folderNames = fs.readdirSync(postsDirectory);
  const allCategories = folderNames.reduce((categories, folderName) => {
    // Read markdown file as string
    const mdxFilePath = path.join(postsDirectory, folderName, "index.mdx");
    const mdFilePath = path.join(postsDirectory, folderName, "index.md");

    const fullPath = fs.existsSync(mdxFilePath) ? mdxFilePath : mdFilePath;
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const { tags } = matterResult.data;

    return tags ? [...categories, ...tags] : categories;
  }, []);

  const uniqueCategories = [...new Set(allCategories)];

  return uniqueCategories;
}

export async function getPost(slug) {
  const folderNames = fs.readdirSync(postsDirectory);

  for (let folderName of folderNames) {
    // Read markdown file as string
    const mdxFilePath = path.join(postsDirectory, folderName, "index.mdx");
    const mdFilePath = path.join(postsDirectory, folderName, "index.md");

    const fullPath = fs.existsSync(mdxFilePath) ? mdxFilePath : mdFilePath;
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const date = matterResult.data.date.toString();

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    const post = {
      folderName,
      contentHtml,
      ...matterResult.data,
      date,
      slug: slugify(matterResult.data.slug || matterResult.data.title),
    };

    if (post.slug.includes(slug)) {
      return post;
    }
  }
}
