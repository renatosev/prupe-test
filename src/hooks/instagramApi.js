export const fetchInstagramPosts = async () => {
  const response = await fetch('/api/instagram');
  const data = await response.json();
  return data;
};
