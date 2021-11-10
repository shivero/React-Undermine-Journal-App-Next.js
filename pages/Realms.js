import GetRealms from "./utils/GetRealms";
import useDebounce from "./api/useDebouce";
import Loading from "./utils/Loading";
import styles from "../styles/Realms.module.scss";
const Realms = ({ query }) => {
  const debouncedQuery = useDebounce(query, 500);

  const { realms, isLoading, isError } = GetRealms(debouncedQuery);

  if (isLoading) return <div><Loading height={32} width={32}/></div>;
  if (isError) return <div>error</div>;
  if (realms && realms.length == 0) {
    return <div>No realms found</div>;
  }
  return (
    <>
      <ul className={styles.list}>
        {realms.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Realms;
