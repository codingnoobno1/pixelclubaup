import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../components/mongodb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db('quizApp'); // replace with your database name
  const collection = db.collection('quizzes');

  if (req.method === 'GET') {
    const questions = await collection.find({}).toArray();
    res.json(questions);
  } else if (req.method === 'POST') {
    const question = req.body;
    await collection.insertOne(question);
    res.status(201).json({ message: 'Question added successfully' });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
