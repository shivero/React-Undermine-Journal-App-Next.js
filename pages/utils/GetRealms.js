import useSWR from "swr";
import fetcher from "../fetcher";
function GetRealms(query) {
  const { data, error } = useSWR(
    `http://localhost:44913/api/realm/get-realm?query=${query}&region=eu`,
    // "https://jsonplaceholder.typicode.com/users",
    fetcher
  );
  if (error) {
    console.log(error);
  }
  return { realms: data, isLoading: !error && !data, isError: error };
}

export default GetRealms;
