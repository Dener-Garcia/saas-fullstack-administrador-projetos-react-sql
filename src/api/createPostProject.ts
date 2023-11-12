const createPostProject = async (typeReq: string, project: object) => {
    project.cost = 0
    project.service = []

    const data = await fetch("http://localhost:5000/projects", {
      method: typeReq,
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(project)
  })

  return data
}
export default createPostProject