const One = ({color, children}) => {
    return (
      <div>
        <h1 style={{color: color}}>
            One page {color}
            {children}
        </h1>
      </div>
    );
  };
  
  export default One;