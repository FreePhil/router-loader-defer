const Three = ({style, children}) => {
    return (
      <div>
        <h1 style={style}>
            Page Three
            {children}
        </h1>
      </div>
    );
  };
  
  export default Three;