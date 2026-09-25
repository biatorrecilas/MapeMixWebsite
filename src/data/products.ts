export type Category =
  | 'Todas'
  | 'Elétrica'
  | 'Hidráulica'
  | 'Iluminação'
  | 'Ferramentas'
  | 'Reformas'
  | 'Manutenção'
  | 'Casa e dia a dia';

export interface Product {
  id: number;
  name: string;
  category: Category;
  description: string;
  price?: string;
  available: boolean;
  popular?: boolean;
  image: string;
  features?: string[];
}

export const categories: { id: Category; icon: string; description: string; color: string; image: string }[] = [
  {
    id: 'Elétrica',
    icon: '⚡',
    description: 'Fios, tomadas, disjuntores, cabos e tudo para instalações elétricas.',
    color: '#FFB800',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format',
  },
  {
    id: 'Hidráulica',
    icon: '💧',
    description: 'Tubos, conexões, registros, caixas d\'água e mais.',
    color: '#0EA5E9',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop&auto=format',
  },
  {
    id: 'Iluminação',
    icon: '💡',
    description: 'Lâmpadas LED, luminárias, spots, arandelas e decoração luminosa.',
    color: '#F59E0B',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop&auto=format',
  },
  {
    id: 'Ferramentas',
    icon: '🔧',
    description: 'Furadeiras, parafusadeiras, alicates, chaves e ferramentas manuais.',
    color: '#EF4444',
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&h=300&fit=crop&auto=format',
  },
  {
    id: 'Reformas',
    icon: '🏗️',
    description: 'Cimento, argamassa, tintas, pincéis, lixas e materiais para reforma.',
    color: '#8B5CF6',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&auto=format',
  },
  {
    id: 'Manutenção',
    icon: '🔩',
    description: 'Parafusos, pregos, buchas, selantes, adesivos e fixadores.',
    color: '#10B981',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=300&fit=crop&auto=format',
  },
  {
    id: 'Casa e dia a dia',
    icon: '🏠',
    description: 'Organização, limpeza, jardim, produtos práticos para o lar.',
    color: '#EC4899',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&auto=format',
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Cabo Elétrico 2,5mm Flexível — 100m',
    category: 'Elétrica',
    description: 'Cabo flexível de cobre 2,5mm, rolo com 100 metros. Ideal para instalações residenciais.',
    price: 'R$ 189,90',
    available: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&auto=format',
    features: ['Condutor de cobre estanhado', 'Isolamento PVC', '750V de tensão', 'Norma ABNT NBR NM 247-3'],
  },
  {
    id: 2,
    name: 'Disjuntor Bipolar 20A',
    category: 'Elétrica',
    description: 'Disjuntor bipolar para proteção de circuitos residenciais e comerciais. Fácil instalação.',
    price: 'R$ 34,50',
    available: true,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&auto=format',
    features: ['Capacidade 20A', 'Tensão 220V', 'Certificação Inmetro', 'Encaixe padrão DIN'],
  },
  {
    id: 3,
    name: 'Tomada 2P+T com USB — Branca',
    category: 'Elétrica',
    description: 'Tomada com entrada USB integrada, padrão NBR 14136, acabamento branco.',
    price: 'R$ 28,00',
    available: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&auto=format',
    features: ['Padrão NBR 14136', 'Porta USB 5V/2A', 'Acabamento branco', 'Fácil instalação'],
  },
  {
    id: 4,
    name: 'Tubo PVC Soldável 25mm — 6m',
    category: 'Hidráulica',
    description: 'Tubo PVC rígido para instalações hidráulicas de água fria, barra com 6 metros.',
    price: 'R$ 22,90',
    available: true,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop&auto=format',
    features: ['Diâmetro 25mm', 'Comprimento 6m', 'PVC rígido', 'Pressão até 10kgf/cm²'],
  },
  {
    id: 5,
    name: 'Registro de Gaveta 3/4"',
    category: 'Hidráulica',
    description: 'Registro de gaveta em latão para água fria, rosca 3/4 polegada.',
    price: 'R$ 45,00',
    available: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop&auto=format',
    features: ['Material: latão', 'Rosca 3/4"', 'Uso: água fria', 'Alta durabilidade'],
  },
  {
    id: 6,
    name: 'Caixa d\'Água 1000L — Tampa Rosca',
    category: 'Hidráulica',
    description: 'Caixa d\'água polietileno com tampa rosca, resistente a raios UV, 1000 litros.',
    price: 'R$ 459,00',
    available: false,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop&auto=format',
    features: ['Capacidade 1000L', 'Polietileno linear', 'Proteção UV', 'Tampa rosca segura'],
  },
  {
    id: 7,
    name: 'Lâmpada LED Bulbo 9W — 6500K',
    category: 'Iluminação',
    description: 'Lâmpada LED bulbo 9W equivalente a 60W incandescente, luz branca fria 6500K.',
    price: 'R$ 12,90',
    available: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=400&fit=crop&auto=format',
    features: ['9W / 810 lúmens', 'Bivolt 100-240V', 'Vida útil 25.000h', 'Selo Procel A'],
  },
  {
    id: 8,
    name: 'Luminária Spot LED Embutir 7W',
    category: 'Iluminação',
    description: 'Spot LED de embutir, corpo redondo, luz quente 3000K, ideal para salas e quartos.',
    price: 'R$ 32,00',
    available: true,
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=400&fit=crop&auto=format',
    features: ['7W LED integrado', '3000K luz quente', 'Furo Ø85mm', 'Bivolt'],
  },
  {
    id: 9,
    name: 'Furadeira de Impacto 650W',
    category: 'Ferramentas',
    description: 'Furadeira de impacto com 2 velocidades, mandril de 13mm, ideal para alvenaria e madeira.',
    price: 'R$ 289,00',
    available: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&h=400&fit=crop&auto=format',
    features: ['650W de potência', 'Mandril 13mm', '2 velocidades', 'Função impacto'],
  },
  {
    id: 10,
    name: 'Parafusadeira a Bateria 12V',
    category: 'Ferramentas',
    description: 'Parafusadeira/furadeira a bateria 12V com 2 baterias e maleta.',
    price: 'R$ 199,90',
    available: true,
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&h=400&fit=crop&auto=format',
    features: ['12V / 2 baterias Li-Ion', '25+1 torques', 'Maleta inclusa', 'Carregador bivolt'],
  },
  {
    id: 11,
    name: 'Jogo de Chaves Allen — 9 peças',
    category: 'Ferramentas',
    description: 'Jogo com 9 chaves hexagonais Allen em aço cromo-vanádio, 1,5mm a 10mm.',
    price: 'R$ 24,90',
    available: true,
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&h=400&fit=crop&auto=format',
    features: ['9 peças: 1,5–10mm', 'Aço cromo-vanádio', 'Chave L padrão', 'Estojo incluso'],
  },
  {
    id: 12,
    name: 'Argamassa AC-II 20kg',
    category: 'Reformas',
    description: 'Argamassa colante AC-II para revestimentos cerâmicos em ambientes internos e externos.',
    price: 'R$ 32,50',
    available: true,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop&auto=format',
    features: ['20kg', 'Uso interno/externo', 'AC-II — alta aderência', 'Fácil aplicação'],
  },
  {
    id: 13,
    name: 'Tinta Acrílica Fosca Branca — 18L',
    category: 'Reformas',
    description: 'Tinta acrílica fosca para paredes internas e externas, cobertura de até 100m² por demão.',
    price: 'R$ 189,00',
    available: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop&auto=format',
    features: ['18 litros', 'Cobertura ~100m²/dem.', 'Resistente à lavagem', 'Secagem rápida'],
  },
  {
    id: 14,
    name: 'Silicone Multiuso Transparente',
    category: 'Manutenção',
    description: 'Silicone neutro transparente para vedações em vidro, cerâmica, metais e plásticos.',
    price: 'R$ 18,90',
    available: true,
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=400&fit=crop&auto=format',
    features: ['280g', 'Neutro e transparente', 'Alta aderência', 'Resistente a umidade'],
  },
  {
    id: 15,
    name: 'Kit Bucha e Parafuso — 200 peças',
    category: 'Manutenção',
    description: 'Kit com 100 buchas S6 e 100 parafusos 3,5x25mm, em caixinha organizadora.',
    price: 'R$ 19,90',
    available: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=400&fit=crop&auto=format',
    features: ['100 buchas S6', '100 parafusos', 'Caixinha organizadora', 'Nylon resistente'],
  },
  {
    id: 16,
    name: 'Vassoura Industrial 40cm',
    category: 'Casa e dia a dia',
    description: 'Vassoura industrial de cerdas grossas, cabo longo 1,20m, para áreas externas.',
    price: 'R$ 38,00',
    available: true,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&auto=format',
    features: ['Largura 40cm', 'Cabo 1,20m', 'Cerdas grossas', 'Uso externo'],
  },
  {
    id: 17,
    name: 'Mangueira 15m com Suporte',
    category: 'Casa e dia a dia',
    description: 'Mangueira de jardim 15 metros com esguicho regulável e suporte enrolador.',
    price: 'R$ 89,90',
    available: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&auto=format',
    features: ['15 metros', 'Esguicho 8 funções', 'Suporte enrolador', 'PVC reforçado'],
  },
  {
    id: 18,
    name: 'Lâmpada LED Tubular T8 18W — 1,20m',
    category: 'Iluminação',
    description: 'Lâmpada fluorescente LED T8 para substituição de fluorescentes, 18W, 1,20m.',
    price: 'R$ 29,90',
    available: true,
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=400&fit=crop&auto=format',
    features: ['18W / 1800 lúmens', 'Comprimento 1,20m', 'Luz fria 6500K', 'Bivolt'],
  },
];
