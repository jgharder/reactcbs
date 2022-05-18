import { Event } from '../entities/Event';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';


// const getTokenFromStore = () => {
//     const token = useSelector((state: any) => state.user.idToken);
//     return { token };
// }

const fetchEvents = async () => {
    // let { token } = getTokenFromStore();
    const response = await fetch("https://cbs-react-native-46638-default-rtdb.europe-west1.firebasedatabase.app/events.json")
    return await response.json();
}



const addEvent = async ({ event } : { event: Event }) => {
    // let { token } = getTokenFromStore();
    return await fetch("https://cbs-react-native-46638-default-rtdb.europe-west1.firebasedatabase.app/events.json" 
        , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...event
            }),
        });
}

export const useGetEvents = () => {
    return useQuery('events', fetchEvents);
}

export const useAddEvent = () => {
    const queryClient = useQueryClient();
    return useMutation(addEvent, { onSuccess: () => queryClient.invalidateQueries("events") });
}