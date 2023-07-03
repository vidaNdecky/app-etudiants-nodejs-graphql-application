const etudiants = require('./data.js')

const services = {
    etudiants: () => etudiants,
    createEtudiant: ({ firstName, lastName, age }) => {
      const id = etudiants.length + 1;
      const newEtudiant = { id, firstName, lastName, age };
      etudiants.push(newEtudiant);
      return newEtudiant;
    },
    updateEtudiant: ({ id, firstName, lastName, age }) => {
        const etudiantID = Number(id)
        const etudiantIndex = etudiants.findIndex(etudiant => etudiant.id === etudiantID);
        if (etudiantIndex === -1) {
          throw new Error('Étudiant non trouvé.');
        }
        const updatedEtudiant = {
          id,
          firstName: firstName || etudiants[etudiantIndex].firstName,
          lastName: lastName || etudiants[etudiantIndex].lastName,
          age: age || etudiants[etudiantIndex].age
        };
        etudiants[etudiantIndex] = updatedEtudiant;
        return updatedEtudiant;
    },
    deleteEtudiant: ({ id }) => {
        const etudiantID = Number(id)
        const etudiantIndex = etudiants.findIndex(etudiant => etudiant.id === etudiantID);
        if (etudiantIndex === -1) {
            throw new Error('Étudiant non trouvé.');
        }
        etudiants.splice(etudiantIndex, 1);
        return true;
    }
  };
  
  module.exports = services;