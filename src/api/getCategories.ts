const getCategories = async () => {

  const data = await fetch("http://localhost:5000/categories", {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
const categories = await data.json()
return categories

}

export default getCategories