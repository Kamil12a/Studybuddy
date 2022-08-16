export async function createGroup() {
  let groupId;
  await fetch("https://localhost:5001/Group/AddGroup", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tutorId: 1,
      groupOwnerId: 1,
      subjectId: 1,
    }),
  }).then((res) => res.json());
}
