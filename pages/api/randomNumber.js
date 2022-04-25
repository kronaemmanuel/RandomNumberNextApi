// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function handler(req, res) {
  res.status(200).json({ number: getRandomInt(100) });
}
