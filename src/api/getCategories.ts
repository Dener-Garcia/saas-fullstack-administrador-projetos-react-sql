const getCategories = async (typeReq: string) => {

  const data = await fetch("http://localhost:5000/categories", {
    method: typeReq,
    headers: {
        'Content-Type': 'application/json',
    },
})
const categories = await data.json()
return categories

}

export default getCategories