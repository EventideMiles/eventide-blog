import supabase from "@utils/supabaseClient";

export default async function handler(req:any,res:any) {
  const session = supabase.auth.session();
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized.' });
  }
  
  if (req.method === 'POST') {
    const {title, body} = req.body;

  }

  // HTTP method not supported
  else {
    res.setHeader('Allow', ['POST']);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.`})
  }
}