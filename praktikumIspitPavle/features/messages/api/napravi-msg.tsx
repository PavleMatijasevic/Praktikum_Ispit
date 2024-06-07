
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/hono"
import { toast } from "sonner"

type ResponseType = InferResponseType<typeof client.api.messages.$post>
type RequestType = InferRequestType<typeof client.api.messages.$post>["json"];

export const napraviMsg = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async (json) => {
            const res = await client.api.messages.$post({ json });
            return await res.json();
        },
        onSuccess: () => {
            toast.success("Poruka kreirana");
            queryClient.invalidateQueries({ queryKey: ["messages"] });
        },
        onError: () => {
            toast.error("Neuspelo pravljenje poruke");
        },
    });

    return mutation;
};

