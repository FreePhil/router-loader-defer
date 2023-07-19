const One = ({style, children}) => {
    return (
      <div>
        <h1 style={style}>
            Page One
            {children}
        </h1>
      </div>
    );
  };
  
  export default One;