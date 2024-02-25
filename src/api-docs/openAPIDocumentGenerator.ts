import swaggerJsdoc from 'swagger-jsdoc'

export function generateOpenAPIDocument() {
  return swaggerJsdoc({
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Litegram API',
        version: '1.0.0',
        description: '',
      },
      servers: [
        {
          url: 'http://localhost:4000',
        },
      ],
    },
    apis: [
      // '**/*.ts'
      'src/modules/**/*.ts',
    ],
  })
}
