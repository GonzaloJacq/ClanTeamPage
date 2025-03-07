import React from "react";

interface EdadCompProps {
  fecha: Date;
}

export const EdadComp: React.FC<EdadCompProps> = ({ fecha }) => {
  const calculateAge = (): number => {
    const today: Date = new Date();
    const birthDate: Date = fecha;
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const month: number = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return <div>{calculateAge()}</div>;
};
