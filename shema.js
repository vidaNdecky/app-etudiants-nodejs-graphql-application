const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Etudiant {
    id: Int
    firstName: String
    lastName: String
    age: Int
  }

  type Query {
    etudiants: [Etudiant]
  }

  type Mutation {
    createEtudiant(firstName: String, lastName: String, age: Int): Etudiant
    updateEtudiant(id: Int, firstName: String, lastName: String, age: Int): Etudiant
    deleteEtudiant(id: Int): Boolean
  }
`);

module.exports = schema;