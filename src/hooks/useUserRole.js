import { useEffect } from "react";
import { useState } from "react"

const useUserRole = email => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [isBuyer, setIsBuyer] = useState(false);
  const [isUserRoleLoading, setIsUserRoleLoading] = useState(true);

  useEffect( () => {
    if(email){
    fetch(`http://localhost:5000/users/userrole/${email}`)
    .then(res => res.json())
    .then(data => {
      if(data){
        setIsUserRoleLoading(false);
      }
      if(data.userRole === "Seller"){
        setIsSeller(true);
      } else if(data.userRole === "Admin"){
        setIsAdmin(true);
      } else{
        setIsBuyer(true);
      }
    })
  }}, [email])

  return [isSeller, isBuyer, isAdmin,isUserRoleLoading];
}


export default useUserRole;