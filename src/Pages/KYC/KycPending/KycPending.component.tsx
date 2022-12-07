import * as SignalR from '@microsoft/signalr';
import {useNavigate} from "react-router-dom";

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
            if(e === "Approved")
            {
                navigate("/home");
            }
            else {
                navigate("/login");
            }
        });
    });
    return(
        <>Pending...</>
    );
}

export default KycPending;