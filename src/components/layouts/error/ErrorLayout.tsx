import Image from "next/image";

const ErrorLayout = () => {
  return (
    <main>
      <div className="flex items-center justify-center flex-1">
        <Image sizes="full" alt="Not Found" src={"/images/notFound.png"} />
      </div>
    </main>
  );
};

export default ErrorLayout;
