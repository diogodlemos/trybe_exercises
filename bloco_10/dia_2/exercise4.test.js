const { expect } = require('@jest/globals');
const getRepos = require('./exercise4');

describe('Teste que verifica se o repositorio no gitHub', () => {
  it('contem o repositorio sd-01-week4-5-project-todo-list', () => {
    const url = 'https://api.github.com/orgs/tryber/repos';

    return getRepos(url).then((repositorios) => {
      expect(repositorios).toContain('sd-01-week4-5-project-todo-list');
      expect(repositorios).toContain('sd-01-week4-5-project-meme-generator');
    })
  })
})