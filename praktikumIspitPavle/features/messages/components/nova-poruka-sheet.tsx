import { z } from 'zod';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import { insertMsgSchema } from '@/db/schema';
import { useNoviMsg } from '@/features/messages/hooks/novi-msg';
import { MsgForm } from '@/features/messages/components/poruka-forma';
import { napraviMsg } from '@/features/messages/api/napravi-msg';

const formSchema = insertMsgSchema.pick({
    name: true,
    email: true,
    msg: true,
});
type FormVrednosti = z.input<typeof formSchema>;

export const NoviMsgSheet = () => {
    const { isOpen, onClose } = useNoviMsg();
    const mutation = napraviMsg();

    const onSubmit = (values: FormVrednosti) => {
        mutation.mutate(values, {
            onSuccess: () => {
                onClose();
            }
        });
    };

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-5">
                <SheetHeader>
                    <SheetTitle>Nova poruka</SheetTitle>
                </SheetHeader>
                <MsgForm
                    onSubmit={onSubmit}
                    disabled={mutation.isPending}
                    defaultValues={{
                        name: "",
                        email: "",
                        msg: ""
                    }}
                />
            </SheetContent>
        </Sheet>
    );
};
