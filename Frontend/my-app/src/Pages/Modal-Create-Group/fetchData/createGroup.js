export async function createGroup() {
  let groupId;
  await fetch("https://localhost:5001/Group/AddGroup", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tutorId: 14,
      groupOwnerId: 14,
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
      publishDate: "2022-07-08T08:33:35.765Z",
      expireDate: "2022-07-08T08:33:35.765Z",
      description: "string",
      groupId: groupId,
    }),
  })
}
