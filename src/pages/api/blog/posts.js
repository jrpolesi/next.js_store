import posts from '../../../assets/data/blog'

export default function handler(req, res) {
  const method = req.method
  if(method === "GET"){
    res.status(200).json(posts)
  }
}