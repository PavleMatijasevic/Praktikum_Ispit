import { client } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query";

export const getMessages = () => {
    const query = useQuery({
        queryKey: ["messages"],
        queryFn: async () => {
            const response = await client.api.messages.$get();

            if(!response.ok) {
                throw new  Error('Nije uspeo fetch!');
            }

            const { data } = await response.json();
            return data;
        }
    });
    return query;
}