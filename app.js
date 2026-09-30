const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        name: '박경덕',
        major: '정보통신공학'
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
