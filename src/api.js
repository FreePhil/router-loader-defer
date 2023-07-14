export const getPostById = async (postId) => {
  await delay(1000);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return await response.json();
};

export const getCommentsByPostId = async (postId) => {
  await delay(3000);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  return await response.json();
};

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
