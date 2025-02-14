import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obter o caminho do diretório atual (equivalente ao __dirname no CommonJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentName = process.argv[2]; // Nome do componente passado como argumento

if (!componentName) {
  console.error('Por favor, forneça um nome para o componente.');
  process.exit(1);
}

// Caminho para a pasta de componentes
const componentsDir = path.join(__dirname, 'src', 'components', componentName);

// Cria a pasta do componente
fs.mkdirSync(componentsDir, { recursive: true });

// Cria o arquivo JSX do componente
const jsxContent = `import React from 'react';

export default function ${componentName}() {
  return (
    <div>
      {/* Seu código aqui */}
    </div>
  );
}
`;
fs.writeFileSync(path.join(componentsDir, `${componentName}.jsx`), jsxContent);

// Cria o arquivo CSS do componente (opcional)
const cssContent = `/* Estilos para ${componentName} */`;
fs.writeFileSync(path.join(componentsDir, `${componentName}.css`), cssContent);

console.log(`Componente ${componentName} criado com sucesso!`);