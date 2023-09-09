import { toast } from "react-toastify";

const showSuccessNotification = (message) => {
  toast.success(message, {
    position: "top-right", // Posição da notificação
    autoClose: 5000, // Tempo que a notificação ficará visível em milissegundos
    hideProgressBar: false, // Mostrar barra de progresso
    closeOnClick: true, // Fechar a notificação ao clicar nela
    pauseOnHover: true, // Pausar a contagem de tempo ao passar o mouse sobre a notificação
    draggable: false, // Permitir arrastar a notificação
    progress: undefined, // Progresso customizado
  });
};

const showErrorNotification = (message) => {
  toast.success(message, {
    position: "top-right", // Posição da notificação
    autoClose: 5000, // Tempo que a notificação ficará visível em milissegundos
    hideProgressBar: false, // Mostrar barra de progresso
    closeOnClick: true, // Fechar a notificação ao clicar nela
    pauseOnHover: true, // Pausar a contagem de tempo ao passar o mouse sobre a notificação
    draggable: false, // Permitir arrastar a notificação
    progress: undefined, // Progresso customizado
  });
};

const showWarningNotification = (message) => {
  toast.success(message, {
    position: "top-right", // Posição da notificação
    autoClose: 5000, // Tempo que a notificação ficará visível em milissegundos
    hideProgressBar: false, // Mostrar barra de progresso
    closeOnClick: true, // Fechar a notificação ao clicar nela
    pauseOnHover: true, // Pausar a contagem de tempo ao passar o mouse sobre a notificação
    draggable: false, // Permitir arrastar a notificação
    progress: undefined, // Progresso customizado
  });
};

export {
  showSuccessNotification,
  showWarningNotification,
  showErrorNotification,
};
