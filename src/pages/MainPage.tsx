import { useEffect } from "react";
import supabase from "../lib/supabase/supabase";
import { useNavigate } from "react-router-dom";
import { useSessionContext } from "@supabase/auth-helpers-react";

const MainPage = () => {
  const { session } = useSessionContext();
  const navigate = useNavigate();

  const Logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Error Logging out: ", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("Test").select();
      if (error) {
        console.error("Error Fetching data: ", error);
      }
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <div>
      {session?.user ? (
        <>
          <p>현재 회원: {session?.user?.email}</p>
          <button className="bg-blue-300" onClick={Logout}>
            로그아웃
          </button>
        </>
      ) : (
        <>
          <p>로그인 해 주세요.</p>
          <button className="bg-blue-300" onClick={() => navigate("/auth")}>
            로그인
          </button>
        </>
      )}
    </div>
  );
};

export default MainPage;
