import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../landing/dist")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../landing/dist/index.html"))
});

app.get("/download", (req, res) => {
    const filePath = path.join(__dirname, "files", "DullMind.exe");
    res.download(filePath, "BullMind.exe");
})

app.listen(PORT, () => {
    console.log('Server is running on port' + PORT);
});
