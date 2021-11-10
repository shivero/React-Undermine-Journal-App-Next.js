import GetRealms from "./utils/GetRealms";
import useDebounce from "./api/useDebouce";

const Realms = ({ query }) => {
  const debouncedQuery = useDebounce(query, 500);

  const { realms, isLoading, isError } = GetRealms(debouncedQuery);

  if (isLoading) return <div>isLoading</div>;
  if (isError) return <div>error</div>;
  if (realms && realms.length == 0) {
    return <div>No realms found</div>;
  }
  return (
    <>
      <div>Test</div>
      <div>TypedPhrase: {debouncedQuery}</div>

      <div>
        {realms.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </>
  );
};

export default Realms;
