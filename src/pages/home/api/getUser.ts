import { createClient } from '@/src/shared/api/supabase/client'; // supabase client 불러오는 곳

export async function getUser() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();
  console.log(user);
  if (user) {
    console.log('로그인한 사용자:', user);
  } else {
    console.log('로그인하지 않음');
  }
  return user;
}
