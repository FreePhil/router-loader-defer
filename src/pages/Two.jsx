const Two = ({style, children}) => {
    return (
      <div>
        <h4 style={style}>
            Component Two
            {children}
        </h4>
      </div>
    );
  };
  
  export default Two;