import renderToString from "next-mdx-remote/render-to-string";
import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import glob from "fast-glob";
import serializers from "components/serializers";
import rehypeSlug from "rehype-slug";

// This glob is what will be used to generate static routes
const postGlob = "content/posts/**/*.mdx";
const snippetGlob = "content/snippets/**/*.mdx";
const projectGlob = "content/projects/**/*.mdx";

function mdxFilePathToSlug(path) {
  const mdxSource = fs.readFileSync(path);
  const { data: frontMatter } = matter(mdxSource);
  return frontMatter.slug;
}

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

export function getAllMdxPaths() {
  const files = glob.sync(postGlob);
  return files.map((file) => {
    const slug = mdxFilePathToSlug(file);
    return {
      params: {
        slug,
      },
    };
  });
}

export async function getAllMdxPathsNotSecret() {
  const posts = await getAllPostsForBlog();
  return posts.filter((post) => !post.secret);
}

export async function getMdxPost(slug) {
  const files = glob.sync(postGlob);
  const fullPath = files.find((file) => {
    return mdxFilePathToSlug(file) === slug;
  });
  const mdxSource = fs.readFileSync(fullPath);
  const { content, data: frontMatter } = matter(mdxSource, {
    engines: {
      yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
    },
  });
  if (!fullPath) {
    console.warn("No MDX file found for slug");
  }

  const mdx = await renderToString(
    content,
    serializers,
    { rehypePlugins: [rehypeSlug] },
    frontMatter
  );

  return { mdx, frontMatter };
}

export async function getAllPostsForBlog() {
  const files = glob.sync(postGlob);
  return files.map((file) => {
    const mdxSource = fs.readFileSync(file);
    const { data } = matter(mdxSource, {
      engines: {
        yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
      },
    });

    return data;
  });
}

export async function getAllPostsForBlogNotSecret() {
  const files = glob.sync(postGlob);
  return files
    .map((file) => {
      const mdxSource = fs.readFileSync(file);
      const { data } = matter(mdxSource, {
        engines: {
          yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
        },
      });

      return data;
    })
    .filter((frontmatter) => !frontmatter.secret);
}

export async function getSnippetPaths() {
  const files = glob.sync(snippetGlob);
  return files.map((file) => {
    const slug = mdxFilePathToSlug(file);
    return {
      params: {
        slug,
      },
    };
  });
}

export async function getSnippets() {
  const files = glob.sync(snippetGlob);
  return files.map((file) => {
    const mdxSource = fs.readFileSync(file);
    const { data } = matter(mdxSource, {
      engines: {
        yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
      },
    });

    return data;
  });
}

export async function getProjectPaths() {
  const files = glob.sync(projectGlob);
  return files.map((file) => {
    const slug = mdxFilePathToSlug(file);
    return {
      params: {
        slug,
      },
    };
  });
}

export async function getProjects() {
  const files = glob.sync(projectGlob);
  return files.map((file) => {
    const mdxSource = fs.readFileSync(file);
    const { data } = matter(mdxSource, {
      engines: {
        yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
      },
    });

    return data;
  });
}

export async function getSnippet(slug) {
  const files = glob.sync(snippetGlob);
  const fullPath = files.find((file) => {
    return mdxFilePathToSlug(file) === slug;
  });
  const mdxSource = fs.readFileSync(fullPath);
  const { content, data: frontMatter } = matter(mdxSource, {
    engines: {
      yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
    },
  });
  if (!fullPath) {
    console.warn("No MDX file found for slug");
  }

  const mdx = await renderToString(content, serializers, null, frontMatter);

  return { mdx, frontMatter };
}

export const getPosts =
  process.env.NODE_ENV === "development"
    ? getAllPostsForBlog
    : getAllPostsForBlogNotSecret;

export const getPaths =
  process.env.NODE_ENV === "development"
    ? getAllMdxPaths
    : getAllMdxPathsNotSecret;

export async function getSortedPosts() {
  const posts = await getPosts();
  return posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}
