 async function createAccount() {
   fetch("https://api.publicapis.org/entries")
    .then((response) => {
      response.json().then((parsedJson) => {
        console.log("xd");
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
