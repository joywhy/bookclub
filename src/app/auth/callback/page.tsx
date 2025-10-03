'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/src/shared/api/supabase/client';

export default function OAuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleOAuth = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      console.log('동작', params, code);
      if (code) {
        // 구글에서 받은 code로 세션 교환
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) {
          console.error('OAuth 코드 교환 실패:', error.message);
          return;
        }
      }

      // 로그인 완료 후 홈으로 이동
      router.replace('/');
    };

    handleOAuth();
  }, [router]);

  return <p>로그인 처리 중...</p>;
}
