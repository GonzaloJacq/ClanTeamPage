// Formatear la fecha en formato DD/MM/YYYY
export const formatDateComp = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses en JavaScript van de 0 a 11, por eso sumamos 1
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
