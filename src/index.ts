// index.ts
import express from 'express';
import livresRoutes from './routes/livresRoutes';

const app = express();
const PORT = 3000;

app.use('/livre', livresRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
