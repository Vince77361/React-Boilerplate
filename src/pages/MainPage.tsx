import { useEffect } from "react";
import supabase from "../lib/supabase/supabase";

const MainPage = () => {
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
  return <div>메인 페이지입니다</div>;
};

export default MainPage;
