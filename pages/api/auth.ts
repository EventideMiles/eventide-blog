import { NextApiRequest, NextApiResponse } from "next/types";
import supabase from "@utils/supabaseClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === "POST")
    supabase.auth.api.setAuthCookie(req, res);
  else if(req.method === "DELETE")
    supabase.auth.api.deleteAuthCookie(req, res, {});
    else {
      res.setHeader("Allow", ["GET", "POST"]);
      res
        .status(405)
        .json({ message: `HTTP method ${req.method} is not supported. ` });
    }
};

export default handler