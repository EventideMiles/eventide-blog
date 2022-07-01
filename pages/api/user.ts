import supabase from "@utils/supabaseClient";

export async function getUser(cookie?:any) {
  /**
   * Get user from supabase api
   * @param cookie - sb-access-token cookie
   * @returns user data from 
   * @returns null if error or no user
   */

  let userData = null;
  if (cookie) {
    const user = await supabase.auth.api.getUser(cookie);
    if (user) {
        userData = user.user; // strip away excess data
      }
    }
  return userData;
}