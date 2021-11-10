import Image from "next/image";

const getLoaderPath = () => {
  return "../../public/images/loader";
}
const Loading = ({height, width}) => {
  return (
    <>
      <span>
        {/* Always omit 'public' dir when specifying src to image */}
        <Image
          alt="Loading image"
          src="/images/loader/tail-spin.svg"
          width={width}
          height={width}
        />
      </span>
    </>
  );
};
export default Loading;
