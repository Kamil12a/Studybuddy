export async function getGroups(setGroupProperties) {
  await fetch("https://localhost:5001/Group/GetAllGroups")
    .then((response) => {
      response.json().then((parsedJson) => {
        setGroupProperties(parsedJson.groups);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
