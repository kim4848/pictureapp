export const SaveDoc =async (doc) => {
    await fetch("/Documentation", {
      method: "post",
      headers: {
        "Content-Type": "application/json",     
        "key":"d75cb5e5-5526-401d-9e7b-80d8080c3d53"
      },
      body: JSON.stringify(doc),
    }).then((x) => {
      
      return x.json()
    }).then(j=>console.log(j));
  };