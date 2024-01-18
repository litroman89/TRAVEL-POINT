import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BtnHome from "@/components/BtnHome";
import useHttp from "@/hooks/useHttp.tsx";

import { listAppearing } from "@/utils/appearing";

import "./userDetails.scss";

const UserDetails = () => {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState<any>();
  const { loading, request, error } = useHttp();

  useEffect(() => {
    async function getUser() {
      const data = await request(`${import.meta.env.VITE_USERS_URL}/${userId}`);

      setUserDetails(data);
    }
    getUser();
  }, []);

  //додаємо анімацію
  useEffect(() => {
    listAppearing("li");
  });

  return (
    <>
      <h1>User Details</h1>

      <ul>
        <li>
          <h4>Name:</h4>
          <span>{loading ? "Loading..." : userDetails?.name}</span>
        </li>

        <li>
          <h4>Email:</h4>
          <span>{loading ? "Loading..." : userDetails?.email}</span>
        </li>

        <li>
          <h4>Phone:</h4>
          <span>{loading ? "Loading..." : userDetails?.phone}</span>
        </li>

        <li>
          <h4>Website:</h4>
          <span>{loading ? "Loading..." : userDetails?.website}</span>
        </li>
      </ul>

      <BtnHome />

      {error ? <p>{error}</p> : null}
    </>
  );
};

export default UserDetails;
