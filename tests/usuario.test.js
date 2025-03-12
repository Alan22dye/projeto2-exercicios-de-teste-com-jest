const usuario = require('../src/usuario');

test('O objeto usuario deve ter nome, idade e email', () => {
    expect(usuario).toHaveProperty('Alan');
    expect(usuario).toHaveProperty('17');
    expect(usuario).toHaveProperty('email');
});

test('Os valores do objeto usuario devem ser corretos', () => {
    expect(usuario.nome).toBe("Jovêncio Neto");
    expect(usuario.idade).toBe(16);
    expect(usuario.email).toBe("jovenciosigma@gmail.com");
});
