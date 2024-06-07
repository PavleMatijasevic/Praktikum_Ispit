import { z } from "zod";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { insertMsgSchema } from "@/db/schema";
import { Form, FormControl, FormItem, FormMessage, FormLabel, FormField } from "@/components/ui/form";

const formSchema = insertMsgSchema.pick({
    name: true,
    email: true,
    msg: true,
});
type FormVrednosti = z.input<typeof formSchema>;

type MsgFormProps = {
    id?: string,
    onSubmit: (values: FormVrednosti) => void;
    onDelete?: () => void;
    disabled: boolean;
    defaultValues?: FormVrednosti;
};

export const MsgForm = ({
    id,
    defaultValues,
    onSubmit,
    onDelete,
    disabled
}: MsgFormProps) => {
    const form = useForm<FormVrednosti>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues,
    });

    const handleSubmit = (values: FormVrednosti) => {
        onSubmit(values);
    };

    const handleDelete = () => {
        onDelete?.();
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-2 pt-3">
                <FormField
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ime</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={disabled}
                                    placeholder="Ime"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={disabled}
                                    placeholder="Email"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    name="msg"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Poruka</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={disabled}
                                    placeholder="Poruka"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button className="w-full" disabled={disabled}>
                    {id ? "Sačuvaj izmene" : "Napravi nalog"}
                </Button>
                {!!id && (
                    <Button
                        type="button"
                        disabled={disabled}
                        onClick={handleDelete}
                        className="w-full"
                        size="icon"
                        variant="destructive"
                    >
                        <Trash className="size-2 pr-2" />
                        Obriši nalog
                    </Button>
                )}
            </form>
        </Form>
    );
};
