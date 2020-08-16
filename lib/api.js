import renderToString from "next-mdx-remote/render-to-string";
import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import glob from "fast-glob";
import serializers from "components/serializers";

// This glob is what will be used to generate static routes
const contentGlob = "content/**/*.mdx";

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
  const files = glob.sync(contentGlob);
  return files.map((file) => {
    const slug = mdxFilePathToSlug(file);
    return {
      params: {
        slug,
      },
    };
  });
}

export async function getMdxPost(slug) {
  const files = glob.sync(contentGlob);
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

export async function getAllPostsForBlog() {
  const files = glob.sync(contentGlob);
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
