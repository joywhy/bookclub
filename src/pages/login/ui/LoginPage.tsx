import { GalleryVerticalEnd } from 'lucide-react';
import { LoginForm } from '@/src/shared/ui';

export default function LoginPage() {
  return (
    <div className="border-2">
      <div className="bg-muted flex min-h-[100svh] flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <a
            href="#"
            className="flex items-center gap-2 self-center font-medium"
          >
            <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="h-4 w-4" />
            </div>
            Acme Inc.
          </a>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
