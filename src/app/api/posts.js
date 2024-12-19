import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const postsPath = path.join(process.cwd(), 'post.json');
    const existingPosts = JSON.parse(fs.readFileSync(postsPath, 'utf8'));

    const newPost = req.body;
    newPost.id = Date.now(); // Ajoute un ID unique au post
    existingPosts.push(newPost);

    fs.writeFileSync(postsPath, JSON.stringify(existingPosts, null, 2));

    res.status(200).json({ message: 'Post créé avec succès !' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
