import { Event } from "../entities/Event";
import { useQuery, useMutation, useQueryClient } from "react-query";

const fetchEvents = async (token: any) => {
  const response = await fetch(
    `https://cbs-react-native-46638-default-rtdb.europe-west1.firebasedatabase.app/events.json?auth=${token.queryKey[1]}`
  );
  const data = await response.json();
  let events = [];

  for (let key in data) {
    events.push({
      ...data[key],
      id: key,
    });
  }
  return events;
};

const addEvent = async ({ event, token }: { event: Event; token: any }) => {
  return await fetch(
    `https://cbs-react-native-46638-default-rtdb.europe-west1.firebasedatabase.app/events.json?auth=${token}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...event,
      }),
    }
  );
};

export const useGetEvents = (token: any) => {
  return useQuery(["events", token], fetchEvents);
};

export const useAddEvent = () => {
  const queryClient = useQueryClient();
  return useMutation(addEvent, {
    onSuccess: () => queryClient.invalidateQueries("events"),
  });
};
