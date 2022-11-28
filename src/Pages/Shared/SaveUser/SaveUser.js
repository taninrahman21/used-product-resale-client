import toast from "react-hot-toast";

const saveUser = (name, email, role) => {
  const user = {name, email, role};
  fetch('https://beche-daw-server.vercel.app/users', {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.acknowledged){
      toast.success('User Create Succesfully');
    }
  });
}

export default saveUser;