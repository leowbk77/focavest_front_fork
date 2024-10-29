export interface Task {
    subject: string;
    topic: string;
    priority: "alta" | "media" | "baixa";
    time: string;
    estimatedDuration: string;
}

export interface AgendaProps {
    date: string;
    tasks: Task[];
}

export interface Agenda {
    item: AgendaProps,
}