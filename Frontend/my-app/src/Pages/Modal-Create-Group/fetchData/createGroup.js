export async function createGroup() {
  let groupId;
  await fetch("https://localhost:5001/Group/AddGroup", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tutorId: 15,
      groupOwnerId: 15,
      subjectId: 15,
    }),
  })
    .then((res) => res.json())
    .then((id) => {
      groupId = id;
    });
  await fetch("https://localhost:5001/Group/AddGroupProperty ", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      publishDate: "2022-07-08T12:59:20.527Z",
      expireDate: "2022-07-08T12:59:20.527Z",
      description: "string",
      groupId: groupId,
    }),
  });
}
