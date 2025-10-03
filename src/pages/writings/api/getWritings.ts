import { createClient } from '@/src/shared/api/supabase/server'; // supabase client 불러오는 곳

export async function getWritings() {
  const supabase = await createClient();

  const { data, error } = await supabase.from('writings').select('*');

  if (error) throw error;
  return data;
}
