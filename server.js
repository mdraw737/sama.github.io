
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('vistas'));

app.get('/validarUsuario', (req, res) => {
    const { usuario, contraseña } = req.query;
    if (usuario === 'admin' && contraseña === 'admin') {
        res.json({ valido: true });
    } else {
        res.json({ valido: false });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});