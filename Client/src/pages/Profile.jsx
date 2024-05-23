import React from "react";
import { useAuth } from "../Utills/Auth";

const Profile = () => {
  const auth = useAuth();
  return (
    <div>
      <p className="text-red-600 text-[22px] font-extrabold text-center m-8">{auth.user}</p>
    </div>
  );
};

export default Profile;
