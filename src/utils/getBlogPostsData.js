/**
 * Fetches blog posts data from a specific URL.
 * @return {Promise<Object[]>} A promise that resolves with the data if the fetch was successful.
 * @throws {Error} Throws an error if the fetch operation fails or if the fetched data is null.
 */
export function getBlogPostsData() {
  return new Promise((resolve, reject) => {
    const url =
      "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch data from ${url}. HTTP status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          resolve(data);
        } else {
          throw new Error(`Data fetched from ${url} is null.`);
        }
      })
      .catch((error) => {
        reject(
          new Error(`An error occurred while fetching data: ${error.message}`)
        );
      });
  });
}
