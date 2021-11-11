import GetRealms from "./utils/GetRealms";
import useDebounce from "./api/useDebouce";
import Loading from "./utils/Loading";
import styles from "../styles/Realms.module.scss";
import { SetLocalStorage, GetLocalStorageItem } from "./utils/LocalStorage";
import { useEffect, useState } from "react";
const Realms = ({ query }) => {
  const debouncedQuery = useDebounce(query, 500);
  const [selectedRealm, setSelectedRealm] = useState("");
  const { realms, isLoading, isError } = GetRealms(debouncedQuery);

  const handleRealmClick = (props) => {
    SetLocalStorage("realm", {
      region: props.region?.toLowerCase(),
      name: props.name,
    });
    setSelectedRealm(showSavedLSKeyValue("realm"));
  };
  useEffect(() => {
    setSelectedRealm(showSavedLSKeyValue("realm"));
  }, []);

  const showSavedLSKeyValue = (key) => {
    var value = GetLocalStorageItem(key);
    return JSON.stringify(value);
  };

  if (isLoading)
    return (
      <div>
        <Loading height={32} width={32} />
      </div>
    );
  if (isError) return <div>error</div>;
  if (realms && realms.length == 0) {
    return <div>No realms found</div>;
  }
  return (
    <>
      <ul className={styles.list}>
        {realms.map((item) => (
          <li
            key={item.id}
            onClick={() =>
              handleRealmClick({ region: item.region, name: item.slug })
            }
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div>{selectedRealm}</div>
    </>
  );
};

export default Realms;
