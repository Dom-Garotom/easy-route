interface  NotificationItemProps {
    id: string
    title : string ,
    description : string ,
    time : string 
}

export const NotificationMock : (NotificationItemProps)[] = [
    {
      id: "1",
      title: "Ônibus a caminho",
      description: "O ônibus está a 5 minutos de distância do ponto.",
      time: "10:30 AM"
    },
    {
      id: "2",
      title: "Chegada ao destino",
      description: "O ônibus chegou ao ponto de destino, por favor desça.",
      time: "11:15 AM"
    },
    {
      id: "3",
      title: "Alteração de horário",
      description: "O horário do ônibus foi alterado para 12:00 PM.",
      time: "09:45 AM"
    },
    {
      id: "4",
      title: "Transporte Cancelado",
      description: "O ônibus não estará disponível hoje devido a manutenção.",
      time: "08:00 AM"
    },
    {
      id: "5",
      title: "Novo ponto de parada",
      description: "Foi adicionado um novo ponto de parada na rota.",
      time: "07:30 AM"
    },
    {
      id: "6",
      title: "Trânsito pesado",
      description: "O ônibus está atrasado devido ao trânsito intenso na região.",
      time: "06:45 AM"
    },
    {
      id: "7",
      title: "Alerta de segurança",
      description: "Houve um incidente de segurança perto do ponto de ônibus, fique atento.",
      time: "06:00 AM"
    },
    {
      id: "8",
      title: "Desvio na rota",
      description: "O ônibus fará um desvio devido a obras na estrada.",
      time: "05:30 AM"
    },
    {
      id: "9",
      title: "Problema mecânico",
      description: "O ônibus está aguardando conserto devido a falha mecânica.",
      time: "05:00 AM"
    },
    {
      id: "10",
      title: "Chegada atrasada",
      description: "O ônibus estará 10 minutos atrasado devido a tráfego.",
      time: "04:45 AM"
    },
    {
      id: "18",
      title: "Desvio na rota",
      description: "O ônibus fará um desvio devido a obras na estrada.",
      time: "05:30 AM"
    },
    {
      id: "19",
      title: "Problema mecânico",
      description: "O ônibus está aguardando conserto devido a falha mecânica.",
      time: "05:00 AM"
    },
    {
      id: "110",
      title: "Chegada atrasada",
      description: "O ônibus estará 10 minutos atrasado devido a tráfego.",
      time: "04:45 AM"
    }
  ];
  