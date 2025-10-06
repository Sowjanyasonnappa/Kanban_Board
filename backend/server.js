import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = "secret_key";



mongoose.connect("mongodb://127.0.0.1:27017/kanbanAuth",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    board:{
        columns: Object
    } 

})

const User = mongoose.model('User', UserSchema);

app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({
        username,
        password: hashed,
        board: {
            columns: {
                todo: { id: 'todo', title: 'To Do', taskIds: [] },
                inprogress: { id: 'inprogress', title: 'In Progress', taskIds: [] },
                done: { id: 'done', title: 'Done', taskIds: [] }
            }
        }
    });
    await user.save();
    res.json({ message: 'User registered' });
});


app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username});
    if (!user) return
    res.status(400).json({ message: 'Invalid credentials'});

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
})

function auth(req, res, next){
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json({ error: 'No token ' });

    try{
        const decoded = jwt.verify(token.split("")[1], JWT_SECRET);
        req.userId = decoded.id;
        next();
    }catch(err){
        return res.status(401).json({ error: 'Invalid token' });
    }
}



// function auth(req, res, next){
//     const token = req.headers["authorization"];
//     if (!token) return res.status(401).json({ error: 'No token'});
//         try{
//             const decoded = jwt.verify(token.split(" ")[1], JWT_SECRET);
//             req.userId = decoded.id;
//             next();
//         }catch(err){
//             res.status(401).json({ error: 'Invalid token' });
//         }
// }



app.get('/api/board', auth, async (req, res) => {
    const user = await User.findById(req.userId);
    res.json(user.board);
});


app.post('/api/board', auth, async (req, res) => {
    const { board } = req.body;
    await User.findByIdAndUpdate(req.userId, { board });
    res.json({ message: 'Board updated' });
});


app.listen(5000,()=> {
    console.log('Server started on http://localhost:5000');
})