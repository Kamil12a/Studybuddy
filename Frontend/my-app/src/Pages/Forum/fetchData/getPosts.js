export async function getPosts(setForumProperties) {
  await fetch("https://localhost:5001/Forum/GetPost?postId=2")
    .then((response) => {
      response.json().then((parsedJson) => {
        setForumProperties([parsedJson]);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
