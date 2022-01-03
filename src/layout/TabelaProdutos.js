const TabelaProdutos = ({ values }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Utilizador</th>
          </tr>
        </thead>
        <tbody>
          {values.map((produto, index) => {
            return (
              <tr key={index}>
                <td>{produto.name}</td>
                <td>{produto.email}</td>
                <td>{produto.username}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  
  export default TabelaProdutos;
  