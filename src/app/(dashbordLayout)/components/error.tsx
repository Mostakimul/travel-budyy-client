const Error = ({ message }: { message: string }) => {
  return (
    <div role="alert" className="alert alert-error">
      <span>{message}</span>
    </div>
  );
};

export default Error;
