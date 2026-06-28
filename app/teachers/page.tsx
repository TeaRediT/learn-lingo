import { fetchTeachers } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import TeachersClient from "./Teachers.client";

const Teachers = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["teachers"],
    queryFn: fetchTeachers,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TeachersClient />
    </HydrationBoundary>
  );
};

export default Teachers;
