const TabelaProdutos = ({ values }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>categoria</th>
            <th>nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {values.map((produto, indice) => {
            return (
              <tr key={indice}>
                <td>{produto.categoria}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}€</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  
  export default TabelaProdutos;
  