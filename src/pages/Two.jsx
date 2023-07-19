const Two = ({style, children}) => {
    return (
      <div>
        <h1 style={style}>
            Page Two
            {children}
        </h1>
      </div>
    );
  };
  
  export default Two;