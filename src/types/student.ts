export type StudentsAPi = {
    id: number,
    name: string,
    gmail: string,
    phone: string
}

export type Students = {
    id: number,
    name: string,
    email: string,
    phone: string
}

export type StudentRoute = {
    student: number;
    route: number;
    onbus: boolean;
    going: boolean;
    back: boolean;
  };
  