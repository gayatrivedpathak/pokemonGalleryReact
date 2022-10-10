const Pokemon = ({ name, imgUrl }) => {
  return (<div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '2px 2px 10px  grey',
    borderRadius: '5%',
    padding: '10px'
  }}>
    <p>{name}</p>
    <img src={imgUrl} width="100px" />
  </div>);
};

export default Pokemon;