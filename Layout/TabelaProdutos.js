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
          {values.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  
  export default MyTable;
  