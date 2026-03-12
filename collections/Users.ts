import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'Usuário', plural: 'Usuários' },
  auth: {
    tokenExpiration: 60 * 60 * 2, // 2 hours
    maxLoginAttempts: 5,
    lockTime: 1000 * 60 * 60 * 2 // 2 hours
  },
  admin: { useAsTitle: 'name', group: 'Configuração' },
  fields: [
    { type: 'text', label: 'Nome', name: 'name' },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Administrador', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'Autor', value: 'author' }
      ],
      required: true
    }
  ]
};
