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
      if(data.userRole === "Seller"){
        setIsSeller(true);
        setIsUserRoleLoading(false);
      } else if(data.userRole === "Admin"){
        setIsAdmin(true);
        setIsUserRoleLoading(false);
      } else{
        setIsBuyer(true);
        setIsUserRoleLoading(false);
      }
    })
  }}, [email])

  return [isSeller, isBuyer, isAdmin,isUserRoleLoading];
}


export default useUserRole;