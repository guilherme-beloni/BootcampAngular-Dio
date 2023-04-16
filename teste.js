function processarPedidos() {
  const numPedidos = parseInt("Quantos pedidos você deseja fazer?");
  const pedidos = [];

  for (let i = 0; i < numPedidos; i++) {
    const vegano = "O prato é vegano? (s/n)".toLowerCase();
    const calorias = parseInt("Quantas calorias tem o prato?");
    pedidos.push({ vegano, calorias });
  }

  return pedidos;
}

const pedidos = processarPedidos();

console.log("\n--- Lista de Pedidos ---");
pedidos.forEach((pedido) => {
  const tipo = pedido.vegano === "s" ? "Vegano" : "Não Vegano";
  const calorias = pedido.calorias;
  console.log(`${tipo} - ${calorias} calorias`);
});
