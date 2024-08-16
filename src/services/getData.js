const API_KEY = import.meta.env.VITE_ARTICLES_API_KEY;

export const getData = async () => {
  try {
    const response = await fetch(API_KEY);
    const data = await response.json();
    const sortData = data.hits.sort((a, b) => {
      const creation = new Date(a.created_at);
      const creation2 = new Date(b.created_at);
      return creation2 - creation;
    });
    return sortData;
  } catch (error) {
    console.log("Server Fetching Error", error);
  }
};
