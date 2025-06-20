import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Translator } from 'components/i18n';

import { useLayoutMaxWidth } from 'hooks/useLayoutMaxWidth';

export default function ReadmeButton2() {
  const layoutMaxWidth = useLayoutMaxWidth();
 
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button id="readme-button2" variant="ghost">
          <Translator path="navigation.header.readme2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col h-screen w-screen max-w-screen max-h-screen border-none !rounded-none overflow-y-auto">
        <div
          className="mx-auto flex flex-col flex-grow gap-6"
          style={{
            maxWidth: layoutMaxWidth
          }}
        >
          <DialogHeader>
            <DialogTitle>
              <Translator path="navigation.header.readme2" />
            </DialogTitle>
          </DialogHeader>
          My Popup window - CFH
        </div>
      </DialogContent>
    </Dialog>
  );
}
