export async function createGroup(userTheme,groupInformation) {
  let tutor=groupInformation.tutorChecked? userTheme.userDataAccount.id:"none"
  await fetch("https://localhost:5001/Group/AddGroup", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tutorId: tutor ,
      groupOwnerId: userTheme.userDataAccount.id,
      subjectId: 1,
    }),
  }).then((res) => res.json());
}
