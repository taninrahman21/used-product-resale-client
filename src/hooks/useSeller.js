import { useEffect } from "react";
import { useState } from "react"

const useSeller = email => {
  const [isSeller, setIsSeller] = useState(false);

  useEffect( () => {
    if(email){
    fetch(`http://localhost:5000/users/seller/${email}`)
    .then(res => res.json())
    .then(data => {
      setIsSeller(data.isSeller);
    })
  }}, [email])
  return [isSeller];
}


export default useSeller;