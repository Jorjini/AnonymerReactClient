import * as SignalR from '@microsoft/signalr';
import Spinner from 'Components/Spinner/Spinner.component';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { UserKycStatus } from 'Types/Types';

const KycPending = () => {
    const userData: any = JSON.parse(localStorage.getItem('userData')!);
    const navigate = useNavigate();

    // Sockets
    const hubConnection = new SignalR.HubConnectionBuilder()
        .withUrl(`${process.env.REACT_APP_BE_SOCKET_URL}hubs/participant?email=${userData?.token?.email}`, {
            skipNegotiation: true,
            transport: SignalR.HttpTransportType.WebSockets
        })
        .build();

    hubConnection.start().then(() => {
        // hubConnection.invoke('send-message', { message: 'text is done' });
        hubConnection.on('kycDone', (e) => {
            if (e === "Approved") {
                navigate("/home");
            }
            else {
                navigate("/login");
            }
        });
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userData = JSON.parse(localStorage.getItem('userData')!);
        const userDataToken = userData?.token

        if (
            token &&
            userDataToken?.kycStatus === UserKycStatus.Approved &&
            userDataToken?.emailVerified
        ) {
            navigate('/home/chat/1');
        };
    }, [navigate]);

    return (
        <Spinner text="Pending..." show />
    );
}

export default KycPending;