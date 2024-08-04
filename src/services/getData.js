const API_KEY= process.env.ARTICLES_API_KEY

export const getData = async () => {

  const response = await fetch(API_KEY)
  const data = await response.json()

  const sortData=data.hits.sort((a, b) =>{
    const creation = new Date(a.created_at)
    const creation2 = new Date(b.created_at)
    return creation2 - creation
  })
  return sortData
}




