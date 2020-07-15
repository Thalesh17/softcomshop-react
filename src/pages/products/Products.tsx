import React, { useEffect, useState } from "react";
import { Container, Button, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../../services/api";
import NavBar from "../templates/navbar/NavBar";


interface Product {
  name: string;
  description: string;
  group: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
  
  }, []);

  function renderProducts() {
    return products.map((product) => {
      return (
        <tr>
          <td></td>
          <td></td>
          <td>
            <Button onClick={() => {}}>Editar</Button>
            <Button
              variant="danger"
              onClick={() => {}}
            >
              Excluir
            </Button>
          </td>
        </tr>
      );
    });
  }

  return (
    <div>
      <NavBar />
      <Container>
        <h3>Produtos</h3>
        <Button className="right" onClick={() => {}}>
          Cadastrar
        </Button>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Data</th>
              <th>Atualizado em</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderProducts()}</tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Products;
