// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  console.log("data >>> ", req.method, req.body);


  res.status(200).json({ data: req.body })
}
