import illustration from "../../../assets/auth-illustration.svg";

const AuthIllustration = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center h-full bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white p-12">
      <img
        src={illustration}
        alt="NovaGrid Analytics"
       className="w-80 xl:w-96 mb-8"
      />

      <h1 className="text-4xl xl:text-5xl font-bold mb-4">
        NovaGrid Analytics
      </h1>

      <p className="text-center text-blue-100 leading-8 max-w-md">
        Enterprise Operations Dashboard to manage employees,
        customers, projects and business insights in one place.
      </p>

    </div>
  );
};

export default AuthIllustration;