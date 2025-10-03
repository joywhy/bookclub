import { createClient } from '@/src/shared/api/supabase/client'; // supabase client 불러오는 곳

export async function loginInWithGoogle() {
  const supabase = await createClient();

  let { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000',
    },
  });
  if (error) throw error;
  return data;
}
// https://wiodivwetthfqjyseils.supabase.co/auth/v1/callback
