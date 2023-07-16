/**
 * Extracts the article header and its link from the provided blogPost.
 * @param {Object} blogPost - An object representing a blog post.
 * @return {Object} Returns an object containing the article header and its link.
 */
export function getArticleHeader(blogPost) {
  const categories = ["group", "topic", "tags", "categories"];
  let categoryIndex = null;

  // Find out which category the blogPost belongs to
  categories.forEach((category, index) => {
    if (blogPost[category][0]) {
      categoryIndex = categories.length - index - 1;
    }
  });

  // If a valid category was found, extract the article header and link
  if (
    categoryIndex !== null &&
    blogPost._embedded["wp:term"][categoryIndex][0]["name"] &&
    blogPost._embedded["wp:term"][categoryIndex][0]["link"]
  ) {
    return {
      articleHeader: blogPost._embedded["wp:term"][categoryIndex][0]["name"],
      articleHeaderLink:
        blogPost._embedded["wp:term"][categoryIndex][0]["link"],
    };
  }

  // Default return when no valid category was found
  return {
    articleHeader: "",
    articleHeaderLink: "",
  };
}
